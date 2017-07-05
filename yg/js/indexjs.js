function exit(_name){
	var name = decodeURIComponent(_name);
	var pwd = getCookie(name);
	var str = pwd.substring(0,pwd.length-2);

	setCookie(name,str,365);
	location.href='index.html';
}
//主轮播图
banner();
function banner(){
	var bannerimg = document.getElementsByClassName('bannerimg');
	var banner = document.getElementsByClassName('bannerleft')[0];
	var pic = document.getElementsByClassName('bannerimg');
	var li = document.getElementsByClassName('bannerli');
	for(var i = 0; i < pic.length; i++){
		pic[i].style.opacity = '0';
	}
	pic[0].style.opacity = '1';
	li[0].style.backgroundColor = 'red';
	var picIndex = 0;
	
	function btnr(){
			startMove(pic[picIndex], {opacity:0});
			li[picIndex].style.backgroundColor = 'gray';
			if(picIndex == 3) picIndex = -1;
			startMove(pic[++picIndex],{opacity:100});
			li[picIndex].style.backgroundColor = 'red';
			
	}

	//li点击事件的绑定
	for(var i = 0; i < li.length; i++){
		li[i].index = i;
		li[i].onclick = function(){
			for(var j = 0; j < li.length; j++){
				li[j].style.backgroundColor = 'gray'
				startMove(pic[j],{opacity:0});
			}
	//		pic[this.index].style.display = 'block';
			startMove(pic[this.index],{opacity:100});
			li[this.index].style.backgroundColor = 'red';
			picIndex = this.index;
		}
	}
	
	var timer = setInterval(function(){
		btnr();
	},3000)
	
	banner.onmouseover = function(){
		clearInterval(timer);
	}
	banner.onmouseout = function(){
		timer = setInterval(btnr,3000)
	}

}

//小轮播图
newsBanner1();
function newsBanner1(){
	var jrth = document.getElementsByClassName('jrth')[0];
	var jrthbanner = document.getElementsByClassName('jrthbanner');
	var jrthbtnl = document.getElementsByClassName('jrthbtnl')[0];
	var jrthbtnr = document.getElementsByClassName('jrthbtnr')[0];
	var flag = 0;
	for(var i = 0; i < jrthbanner.length; i++){
		jrthbanner[i].style.left = '242px';
	}
	jrthbanner[0].style.left = '15px';
	var jrthbannerIndex = 0;
	//匀速移动
	yunsumove = function(obj,fx,attr,end,fn){
		clearInterval(obj.timer1);
		obj.timer1=setInterval(function(){
			obj.style[attr]=parseInt(obj.style[attr])-1*fx+"px";
			if(parseInt(obj.style[attr])==end){
				clearInterval(obj.timer1);
				if(fn){
					fn(obj);
				}
			}
		}, 1);
	}
	jrthbtnr.onclick = function(){
			if (!flag){
				flag = 1;
				yunsumove(jrthbanner[jrthbannerIndex],1,"left",-242,function(obj){
					flag = 0;
				});
				if(jrthbannerIndex == 1) jrthbannerIndex = -1;
				jrthbanner[++jrthbannerIndex].style.left = '242px';
				yunsumove(jrthbanner[jrthbannerIndex],1,"left",15);
			}
			
	}
	jrthbtnl.onclick = function(){
        	if (!flag){
				flag = 1;
					yunsumove(jrthbanner[jrthbannerIndex],-1,"left",242,function(obj){
						flag = 0;
					});
				if(jrthbannerIndex == 0) jrthbannerIndex = 2;
				jrthbanner[--jrthbannerIndex].style.left = '-242px';
				yunsumove(jrthbanner[jrthbannerIndex],-1,"left",15);
			}
	}
	var timer = setInterval(function(){
		jrthbtnr.onclick();
	},3000)
	
	jrth.onmouseover = function(){
		clearInterval(timer);
	}
	jrth.onmouseout = function(){
		timer = setInterval(function(){
			jrthbtnr.onclick();
		},3000)
	}

}
//中间的轮播图
newsmidbannerf();
function newsmidbannerf(){
	var boxnewsmidbanner = document.getElementsByClassName('boxnewsmidbanner')[0];
	var current = 0;

	function tab(){
		startMove(boxnewsmidbanner,{left:-722*current})
	}
	
	var timer = setInterval(next,4000);
	function next(){
		current++;
		if(current == 3) {
			current = 0;
			boxnewsmidbanner.style.left = '722px';
		}
		tab();
	}
	boxnewsmidbanner.onmouseover = function(){
		clearInterval(timer);
	}
	boxnewsmidbanner.onmouseout = function(){
		timer = setInterval(next,4000);
	}
}


// ----------------购物车top的红色总数
function showNum(){
	var cartNum = document.getElementById('cartNum');
	var allNum = 0;
	var str = document.cookie;
	var showCart_arr = str.split('; ');
	for(var i = 0; i < showCart_arr.length; i++){
		var col = showCart_arr[i].split('=');
		if(col[0].match(eval("/"+usernameimp+"g[0-9]+$/"))){
			var o = eval("("+decodeURIComponent(col[1])+")");
			allNum += o.num;
		}
	}
	cartNum.innerHTML = allNum;
}
showNum();




///--------------搜索框-----------
var arrtxtsearch;
var url = "data/allgoods.txt";//数据
ajax.get(url, function(str) { //ajax
	arrtxtsearch = eval("(" + str + ")").list; //得到数组
});
var searchtxt = document.getElementsByClassName("searchtxt")[0]
searchtxt.onfocus = function(){
	show();
}
function show() {
	var word = document.getElementsByClassName("searchtxt")[0].value; //得到文本域中的值
	var div1 = document.getElementById("div1"); //得到提示菜单div
	div1.innerHTML = ""; //提示菜单清空内容。如果不做清空，数据将累加。
	if(word != "") { //当文本域中的值为空时
		var reg = eval("/" + word + "/gi"); //声明正则
		for(var i = 0; i < arrtxtsearch.length; i++) { //遍历
			var obj = arrtxtsearch[i]; //得到对象
			var txt = obj.title; //指 列表中具体的一项
			var col = txt.match(reg); //根据正则取出匹配的结果
			if(col) { //当数组存在时
				a2 = txt.split(reg);
				s2 = "";
				for(var j = 0; j < col.length; j++) {
					s2 = s2 + a2[j] + "<font color=red>" + col[j] + "</font>"
				}
				if(a2[j]){
					s2 += a2[j];
				}
				txt = "<div id='listck' class='listck' onclick=\"Change('"+txt+"')\">" + s2 + "</div>";
				div1.innerHTML += txt;
			}
		}
		if(div1.innerHTML != "") {
			div1.style.display = "block";
			//如果当前点击的不是搜索框和搜索框的下拉列表，就让下拉列表隐藏
			document.onclick = function(event){
				if(event.target != listck && event.target != searchtxt){
					div1.style.display = 'none';
				}
			}
		}
	} else {
		div1.style.display = "none";
	}
}
function Change(str) {
	document.getElementsByClassName("searchtxt")[0].value = str;
	document.getElementById("div1").style.display = "none";
}



//-------------跳转--------------

var searchtxt = document.getElementsByClassName('searchtxt')[0];
var searchbtn = document.getElementsByClassName('searchbtn')[0];
searchbtn.onclick = function(){
	var flag = 0;
	for(var i = 0; i < arrtxtsearch.length; i++) {
		var obj = arrtxtsearch[i]; //得到对象
		var txt = obj.title; //指 列表中具体的一项
		console.log(txt);
		if(searchtxt.value == txt){
			flag = 1;
			location.href = 'main/navPage1.html?id='+obj.id;
			break;
		}
	}
	if(flag==0){
		location.href = 'main/navPage1.html?id='+searchtxt.value;
	}
}


var navlefta = document.getElementsByClassName('navlefta')[0];
navlefta.onclick = function(){
	location.href = 'main/navPage1.html?id=';
}


var indexlogo = document.getElementById('indexlogo');
indexlogo.onclick = function(){
	location.href = 'index.html?';
}

var cart = document.getElementsByClassName('cart')[0];
cart.onclick = function(){
	window.open('cart/cart.html');
}


