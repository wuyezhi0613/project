function exit(_name){
	var name = decodeURIComponent(_name);
	var pwd = getCookie(name);
	var str = pwd.substring(0,pwd.length-2);
	setCookie(name,str,365);
	location.href='../index.html';
}
var toplast = document.getElementsByClassName('toplast')[0];
var personList = document.getElementsByClassName('personList')[0];
toplast.onmouseover = function(){
	personList.style.display = 'block';
}
toplast.onmouseout = function(){
	personList.style.display = 'none';
}

//主导航nav
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


function Request(){
	var str=location.href;
	var arr = str.split("?");
	if(arr.length == 2){
		return arr[1].split('id=')[1];
	}
	return "";
}

//请求商品列表

var goodsarr;
var id = Request();
var url = '../data/allgoods.txt';
ajax.get(url,function(str){
	var obj = eval("("+str+")");
	goodsarr=obj.list;
	var o = getGoods(id);
	var box1 = document.getElementById('box1');
	box1.innerHTML+="<img src='../img/"+o.img+"' />";
	bigImg.src = '../img/'+o.img;
	
	var xiaoimg = document.getElementsByClassName('xiaoimg')[0];
	xiaoimg.innerHTML="<img src='../img/"+o.img+"' />"

	var ti1 = document.getElementsByClassName('ti1')[0];
	ti1.innerHTML = o.title;
	document.title = o.title;
	var ti2 = document.getElementsByClassName('ti2')[0];
	ti2.innerHTML = o.content;

	var pricep = document.getElementsByClassName('pricep')[0];
	pricep.innerHTML += "<span style='font-size:24px;font-weight:bold;color:red;'>"+o.price+"</span>" ;

});

/*
$(function{
	$get(
		"../php/getgoodslist.php",
		function(data){
			var goodsarr;
            var id = Request();
            var obj = eval("("+str+")");
	goodsarr=obj.list;
	var o = getGoods(id);
	var box1 = document.getElementById('box1');
	box1.innerHTML+="<img src='../img/"+o.img+"' />";
	bigImg.src = '../img/'+o.img;
	
	var xiaoimg = document.getElementsByClassName('xiaoimg')[0];
	xiaoimg.innerHTML="<img src='../img/"+o.img+"' />"

	var ti1 = document.getElementsByClassName('ti1')[0];
	ti1.innerHTML = o.title;
	document.title = o.title;
	var ti2 = document.getElementsByClassName('ti2')[0];
	ti2.innerHTML = o.content;

	var pricep = document.getElementsByClassName('pricep')[0];
	pricep.innerHTML += "<span style='font-size:24px;font-weight:bold;color:red;'>"+o.price+"</span>" ;

		}
		
	)
})
*/
function getGoods(id){
	for(var i=0; i<goodsarr.length; i++){
		var o=goodsarr[i];
		if(o.id==id){
			return o;
		}
	}
}
//详情页
var box1 = document.getElementById('box1');
var img = document.getElementById('bigImg');
box1.onmousemove = function(event){
	event = event||window.event;
	var x = event.clientX-box1.offsetLeft-100;
	var st = document.documentElement.scrollTop; 
	if(document.body.scrollTop != 0){
		st =  document.body.scrollTop;
	}
	
	var y = event.clientY-box1.offsetTop+st-100;
	if(x<=0) x=0;
	if(y<=0) y=0;
	if(x>=200) x=200;
	if(y>=200) y=200;
	
	glass.style.left = x+'px';
	glass.style.top = y+'px';
	img.style.left = -x*2+'px';
	img.style.top = -y*2+'px';
}
box1.onmouseover = function(){
	glass.style.display='block';
//				console.log(glass.style.display)
	box2 .style.display='block';
}
box1.onmouseout = function(){
	glass.style.display = 'none';
	box2.style.display = 'none';
}


// 商品详情，选项卡
var aa = document.getElementsByClassName('aa');
var bb = document.getElementsByClassName('bb');
for(var i = 0 ; i < aa.length; i++){
	aa[i].index = i;
	aa[i].onclick = function(){
		for(var j = 0; j < aa.length; j++){
			aa[j].style.borderTop = '1px solid #ddd';
			aa[j].style.borderBottom = 'none';
			bb[j].style.display = 'none';
			
		}
		this.style.borderTop = '2px solid firebrick';
		this.style.borderBottom = '2px solid white';
		bb[this.index].style.display = 'inline-block';
	}
}





//---------------------------加入购物车
//------------------注意：若原来有商品，再次加入时不能重置
var addcart = document.getElementsByClassName('addcart')[0];
addcart.onclick = function(){
	addGoods(id);
	location.href = '../cart/cart.html';
}
function addGoods(id){
	var txt = getCookie(usernameimp+"g"+id);
	var obj, str, currentnum;
	var num = parseInt(document.getElementsByClassName('num')[0].value);
	if(txt==''){
		obj = getGoods(id);
		currentnum = num;
	} else {
		obj = eval("("+txt+")");
		currentnum=obj.num+num;
		
	}
	
	str = "{'id':'"+obj.id+"', 'title':'"+obj.title+"', 'img':'"+obj.img+"', 'price':'"+obj.price+"', 'num':"+currentnum+"}";
	setCookie(usernameimp+"g"+id,str,365);
	
	
}

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
//		console.log(txt);
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



//----------------chat
var chat = document.getElementById('chat');
var close = document.getElementsByClassName('close')[0];
var chattishi = document.getElementsByClassName('chattishi')[0];
chattishi.onclick = function(){
	startMove(chat,{"right":0});
}
close.onclick = function(){
	startMove(chat,{"right":-250});
}

