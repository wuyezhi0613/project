function exit(_name){
	var name = decodeURIComponent(_name);
	var pwd = getCookie(name);
	var str = pwd.substring(0,pwd.length-2);
	setCookie(name,str,365);
	location.href='../index.html';
}
//购物车
showCart();
function showCart(){
	var allNum = 0;
	var goodmid = document.getElementsByClassName('goodmid')[0];
	goodmid.innerHTML = '';
	var str = document.cookie;
	var showCart_arr = str.split('; ');
	var flag = 0;
	for(var i = 0; i < showCart_arr.length; i++){
		var col = showCart_arr[i].split('=');
		if(col[0].match(eval("/"+usernameimp+"g[0-9]+$/"))){
			var o = eval("("+decodeURIComponent(col[1])+")");
			var li = document.createElement('div');
			li.className = "buygood";
			li.innerHTML = "<div class='midleft l'><img class='l' src='../img/"+o.img+"'/><div class='infor l'><a target='_blank' href='../main/goodDetail.html?id="+o.id+"' class='goodname'>"
							+o.title+"</a><br /><span>商品编号："+o.id+"&nbsp;&nbsp;</span><span>颜色：公共</span><span>规格：公共</span></div></div><div class='midmid l'>"
							+o.price+"</div><div class='midright l'><span class='youhuo'>有货</span> <input class='btnl' type='button' value='-' /><input class='txt' type='text' value='"
							+o.num+"' /><input class='btnr' type='button' value='+' /><span class='goodprice'>"+(o.price.substring(1)*o.num)+"</span></div><a class='del' href='javascript:void(0)'>收藏删除</a>";
							
			goodmid.appendChild(li);
			var btnl = document.getElementsByClassName('btnl')[flag];
			var btnr = document.getElementsByClassName('btnr')[flag];
			var txt = document.getElementsByClassName('txt')[flag];
			var del = document.getElementsByClassName('del')[flag];
			var goodprice = document.getElementsByClassName('goodprice')[flag];
			btnl.index = o.id;
			btnr.index = o.id;
			txt.index = o.id;
			del.index = o.id;
			goodprice.index = o.id;
			flag++;
		}
	}
	
	if(flag==0){
		var li = document.createElement('div');
		li.className = 'buygood';
		li.innerHTML = '购物车为空';
		li.style.fontSize = '26px';
		li.style.textAlign = 'center';
		li.style.lineHeight = '100px';
		goodmid.appendChild(li);
	}
	lrbtn();
	var allmoney = document.getElementsByClassName('allmoney')[0];
	var goodprice = document.getElementsByClassName('goodprice');
	var all = 0;
	for(var x = 0; x < flag; x++){
		 all+=parseInt(goodprice[x].innerHTML);
	}
	allmoney.innerHTML='共计：'+all; 
}


function lrbtn(){
	var btnl = document.getElementsByClassName('btnl');
	var btnr = document.getElementsByClassName('btnr');
	var del = document.getElementsByClassName('del');
	var txtl = document.getElementsByClassName('txt');
	var goodprice = document.getElementsByClassName('goodprice');
	var allmoney = document.getElementsByClassName('allmoney')[0];
	for(var i = 0; i < btnl.length; i++){
		btnl[i].xiabiao = i;
		btnl[i].onclick = function(){
			var id = this.index;
			var txt = getCookie(usernameimp+'g'+id);
			var obj = eval("("+txt+")");
			obj.num--;
			if(obj.num <= 0){
				setCookie(usernameimp+"g"+id,'',-1);
				showCart();
			} else {
				var str = "{'id':'"+obj.id+"', 'title':'"+obj.title+"', 'img':'"+obj.img+"', 'price':'"+obj.price+"', 'num':"+obj.num+"}";
				setCookie(usernameimp+'g'+id,str,365);
				txtl[this.xiabiao].value = obj.num;
				goodprice[this.xiabiao].innerHTML = parseInt(obj.price.substring(1))*obj.num;
				var all = 0;
				for(var x = 0; x < btnl.length; x++){
					 all+=parseInt(goodprice[x].innerHTML);
				}
				allmoney.innerHTML='共计：'+all; 
			}
		}
	}
	
	for(var i = 0; i < btnr.length; i++){
		btnr[i].xiabiao = i;
		txtl[i].xiabiao = i;
		txtl[i].onblur = function(){
			var id = this.index;
			var txt = getCookie(usernameimp+'g'+id);
			var obj = eval("("+txt+")");
			obj.num = this.value;
			var str = "{'id':'"+obj.id+"', 'title':'"+obj.title+"', 'img':'"+obj.img+"', 'price':'"+obj.price+"', 'num':"+obj.num+"}";
			setCookie(usernameimp+'g'+id,str,365);
			goodprice[this.xiabiao].innerHTML = parseInt(obj.price.substring(1))*obj.num;
			var all = 0;
			for(var x = 0; x < btnl.length; x++){
				 all+=parseInt(goodprice[x].innerHTML);
			}
			allmoney.innerHTML='共计：'+all; 
		}
		btnr[i].onclick = function(){
			var id = this.index;
			var txt = getCookie(usernameimp+'g'+id);
			var obj = eval("("+txt+")");
			obj.num++;
			var str = "{'id':'"+obj.id+"', 'title':'"+obj.title+"', 'img':'"+obj.img+"', 'price':'"+obj.price+"', 'num':"+obj.num+"}";
			
			setCookie(usernameimp+'g'+id,str,365);
			txtl[this.xiabiao].value = obj.num;
					
			goodprice[this.xiabiao].innerHTML = parseInt(obj.price.substring(1))*obj.num;
			var all = 0;
			for(var x = 0; x < btnl.length; x++){
				 all+=parseInt(goodprice[x].innerHTML);
			}
			allmoney.innerHTML='共计：'+all; 
		}
	}
	for(var i = 0; i < del.length; i++){
		del[i].xiabiao = i;
		del[i].onclick = function(){
			var id = this.index;
			setCookie(usernameimp+"g"+id,'',-1);
			showCart();
		}
	}
}


clearall();
function clearall(){
	var clearCart = document.getElementsByClassName('clearCart')[0];
	clearCart.onclick = function(){
		if(confirm('是否清空购物车')){
			var str = document.cookie;
			var clearCart_arr = str.split('; ');
			for(var i = 0; i < clearCart_arr.length; i++){
				var col = clearCart_arr[i].split('=');
				if(col[0].match(eval("/"+usernameimp+"g[0-9]+$/"))){
					var o = eval("("+decodeURIComponent(col[1])+")");
					setCookie(usernameimp+"g"+o.id, '', -10);
				}
			}
			showCart();
		}
	}
}

function jixugouwu(){
	location.href = '../index.html';
}












