function exit(_name){
	var name = decodeURIComponent(_name);
	var pwd = getCookie(name);
	var str = pwd.substring(0,pwd.length-2);
	setCookie(name,str,365);
	location.href='../index.html';
}

//我的易购
var toplast = document.getElementsByClassName('toplast')[0];
var personList = document.getElementsByClassName('personList')[0];
toplast.onmouseover = function(){
	personList.style.display = 'block';
}
toplast.onmouseout = function(){
	personList.style.display = 'none';
}

//nav
var navleft = document.getElementsByClassName('navleftli')[0];
var lefttwo = document.getElementsByClassName('lefttwo')[0];
lefttwo.style.display = 'none';
navleft.onmouseover = function(){
	lefttwo.style.display = 'block';
}
navleft.onmouseout = function(){
	lefttwo.style.display = 'none';
}
var lefttwoli1 = document.getElementsByClassName('lefttwoli1');
var threebg = document.getElementsByClassName('threebg');
for (var i = 0; i < lefttwoli1.length; i++){
	lefttwoli1[i].index = i;
	lefttwoli1[i].onmouseover = function(){
		this.children[1].style.display = 'block';
		
	}
	lefttwoli1[i].onmouseout = function(){
		this.children[1].style.display = 'none';
	}
}

//二级导航
var leftshang = document.getElementsByClassName('leftshang')[0];
var flagleftshanglist = 0;
leftshang.onclick = function(){
	var leftshanglist = document.getElementsByClassName('leftshanglist')[0];
	var leftshanglist2 = document.getElementsByClassName('leftshanglist2')[0];
	if(flagleftshanglist == 0){
		flagleftshanglist = 1;
		leftshanglist.style.display = 'none';
		leftshanglist2.style.border = 'none';
	} else {
		flagleftshanglist = 0;
		leftshanglist.style.display = 'inline-block';
		leftshanglist2.style.borderBottom = '2px solid #aaa';
	}
}



//===================ajax热卖==============

var url = '../data/goods.txt';
var remaiarr;
ajax.get(url,function(str){
	var obj = eval("("+str+")");
	remaiarr = obj.list;
	var remaibox = document.getElementsByClassName('remaibox')[0];
	for(var i = 0; i < 4; i++){
		var remai = document.createElement('div');
		remai.innerHTML="<a href='../main/goodDetail.html?id="+remaiarr[i].id+"'><img src='../img/"+remaiarr[i].img+"' /></a><span>"+remaiarr[i].content+"</span><p class='jiacu'>"+remaiarr[i].price+"</p><p>"+remaiarr[i].songjifen+"</p>"
		remai.className = 'remai';
		remaibox.appendChild(remai);
	}
})

/*
$(function{
	$get(
		"../php/getgoodslist.php",
		function(data){
			var obj = eval("("+str+")");
	            remaiarr = obj.list;
	        var remaibox = document.getElementsByClassName('remaibox')[0];
	        for(var i = 0; i < 4; i++){
		        var remai = document.createElement('div');
		            remai.innerHTML="<a href='../main/goodDetail.html?id="+remaiarr[i].id+"'><img src='../img/"+remaiarr[i].img+"' /></a><span>"+remaiarr[i].content+"</span><p class='jiacu'>"+remaiarr[i].price+"</p><p>"+remaiarr[i].songjifen+"</p>"
		            remai.className = 'remai';
		            remaibox.appendChild(remai);
	            }
		    }
	    )
})
*/
//------购物车数量
function showNum(){
	var cartNum = document.getElementById('cartNum');
	var allNum = 0;
	var str = document.cookie;
	var showCart_arr = str.split('; ');
	var flag = 0;
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
//-------搜索框

var arrtxtsearch;
var url = "../data/allgoods.txt";//数据
ajax.get(url, function(str) { //ajax
	arrtxtsearch = eval("(" + str + ")").list; //得到数组
});

/*
$(function{
	$get(
		"../php/getgoodslist.php",
		var arrtxtsearch;
		function(data){
			arrtxtsearch = eval("(" + str + ")").list;
		}
	)
	
	
})
*/
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
			// 方法2
			var txt = obj.title; //指 列表中具体的一项
			var col = txt.match(reg); //根据正则取出匹配的结果
			if(col) { //当数组存在时
				a2 = txt.split(reg);
				s2 = "";
				for(var j = 0; j < col.length; j++) {
					s2 += a2[j] + "<font color=red>" + col[j] + "</font>"
				}
				s2 += a2[j]
					
				txt = "<div id='listck' class='listck' onclick=\"Change('"+txt+"')\">" + s2 + "</div>";
				div1.innerHTML += txt;
			}
		}
		if(div1.innerHTML != "") {
			//如果当前点击的不是搜索框和搜索框的下拉列表，就让下拉列表隐藏
			document.onclick = function(event){
				if(event.target != listck && event.target != searchtxt){
					div1.style.display = 'none';
				}
			}
			div1.style.display = "block";
		}
	} else {
		div1.style.display = "none";
	}
}
function Change(str) {
//		alert(str)
	document.getElementsByClassName("searchtxt")[0].value = str;
	document.getElementById("div1").style.display = "none";
}



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
			location.href = 'navPage1.html?id='+obj.id;
			break;
		}
	}
	if(flag==0){
		location.href = 'navPage1.html?id='+encodeURIComponent(searchtxt.value);
	}
}

//----------动态创建商品列表
var url = '../data/allgoods.txt';
var jiajuarr;
ajax.get(url,function(str){
	var obj = eval("("+str+")");
	jiajuarr = obj.list;
	var str = location.href;
	var typeID = str.split("type=")[1];
	if(typeID == 2){
		document.getElementsByClassName('biaoti2')[0].innerHTML = '数码家电';
		document.getElementsByClassName('path2')[0].innerHTML = '数码家电';
	}
		var remaibox = document.getElementsByClassName('remaibox')[1];
		for(var i = 0; i < jiajuarr.length; i++){
			if(jiajuarr[i].type==typeID){
				var remai = document.createElement('div');
				remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+jiajuarr[i].id+"'><img src='../img/"+jiajuarr[i].img+"' /></a><span>"+jiajuarr[i].content+"</span><p class='jiacu'>"+jiajuarr[i].price+"</p><p>"+jiajuarr[i].songjifen+"</p>"
				remai.className = 'remai';
				remaibox.appendChild(remai);
			}
		}
})


/*
$(function{
	$get(
		"../php/getgoodslist.php",
		function(data){
	        var obj = eval("("+str+")");
	        jiajuarr = obj.list;
	        var str = location.href;
	        var typeID = str.split("type=")[1];
	        if(typeID == 2){
		        document.getElementsByClassName('biaoti2')[0].innerHTML = '数码家电';
		        document.getElementsByClassName('path2')[0].innerHTML = '数码家电';
	        }
		    var remaibox = document.getElementsByClassName('remaibox')[1];
		    for(var i = 0; i < jiajuarr.length; i++){
			    if(jiajuarr[i].type==typeID){
				    var remai = document.createElement('div');
				        remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+jiajuarr[i].id+"'><img src='../img/"+jiajuarr[i].img+"' /></a><span>"+jiajuarr[i].content+"</span><p class='jiacu'>"+jiajuarr[i].price+"</p><p>"+jiajuarr[i].songjifen+"</p>"
				        remai.className = 'remai';
				        remaibox.appendChild(remai);
			    }
		    }	
		}
	)
})
*/








