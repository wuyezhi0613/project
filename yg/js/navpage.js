
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
		console.log(txt);
		if(searchtxt.value == txt){
			flag = 1;
			location.href = 'navPage1.html?id='+obj.id;
			break;
		}
	}
	if(flag==0){
		location.href = 'navPage1.html?id='+searchtxt.value;
	}
}


//---------------------分页写法--------------------

var allarr; //所有json.list的数据
var kindNum; // 有几个种类
var p = 1;	//当前是第几页
var maxPage = 0;  //一页最多放几个商品
var liNum = 0;
var leftbtn = document.getElementById('leftbtn');
var rightbtn = document.getElementById('rightbtn');
var strloca = location.href;
var sousuoID = strloca.split("id=")[1];
var url = '../data/allgoods.txt';
ajax.get(url,function(str){
	var obj = eval("("+str+")");
	maxPage = obj.maxGoods;
	allarr = obj.list;
	getPage(p);
})
	

//获取当前页
function getPage(page){
	p = page;
	//上一页和下一页的高亮显示
	if(p == 1){
		leftbtn.style.color = '#eee';
		leftbtn.style.borderColor = '#eee';
		leftbtn.style.textDecoration = 'none';
	} else {
		leftbtn.style.color = '#000000';
		leftbtn.style.borderColor = '#000000';
		leftbtn.style.textDecoration = 'underline';
	}
	if(p ==liNum){
		rightbtn.style.color = '#eee';
		rightbtn.style.borderColor = '#eee';
		rightbtn.style.textDecoration = 'none';
	} else {
		rightbtn.style.color = '#000000';
		rightbtn.style.borderColor = '#000000';
		rightbtn.style.textDecoration = 'underline';
	}
	
	showGoods();
}
var k = sousuoID;
var currentArr = [];
function showGoods(){
	//上下页按钮样式
	leftbtn.style.display = 'inline-block';
	rightbtn.style.display = 'inline-block';
	//精确查找
	if(/^\d+$/.test(k)){
		leftbtn.style.display = 'none';
		rightbtn.style.display = 'none';
		var kindCurrentNum = 0;  //当前种类的总数
		for(var i = 0; i < allarr.length; i++){
			var o = allarr[i];
			if (k == o.id){
				currentArr[kindCurrentNum++] = o;
				break;
			}
		}
		var remaibox = document.getElementsByClassName('remaibox')[0];
		remaibox.innerHTML = '';
		var o = currentArr[0];
		var remai = document.createElement('div');
		remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+o.id+"'><img src='../img/"+o.img+"' /></a><span>"+o.content+"</span><p class='jiacu'>"+o.price+"</p><p>"+o.songjifen+"</p>"
		remai.className = 'remai';
		remaibox.appendChild(remai);
	} else if(k == ''){
		//搜索全部
		var kindCurrentNum = allarr.length;  //当前种类的总数
		currentArr = allarr;
		//页数li
		var ol = document.getElementById('pageIndex');
		ol.innerHTML = '';
		liNum = Math.ceil(kindCurrentNum/maxPage);
		for(var i = 0; i < liNum; i++){
			var li = document.createElement('li');
			li.index = i+1;
			li.innerHTML = "<a class='indexli' href='javascript:getPage("+li.index+");'>"+li.index+"</a>";
//			li.onclick = function(){
//				var indexli = document.getElementsByClassName('indexli');
//				for(var j = 0; j < indexli.length; j++){
//					indexli[j].style.backgroundColor = 'none';
//				}
//				this.style.backgroundColor = 'red';
//			}
			ol.appendChild(li);
		}
		
		
		var remaibox = document.getElementsByClassName('remaibox')[0];
		remaibox.innerHTML = '';
		//当前页需要显示的商品数小于等于总数（还能输出4个商品）
		if (kindCurrentNum-maxPage*p >= 0){
			for (var i = maxPage*(p-1); i < p*maxPage; i++){
				var o = currentArr[i];
					var remai = document.createElement('div');
					remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+o.id+"'><img src='../img/"+o.img+"' /></a><span>"+o.content+"</span><p class='jiacu'>"+o.price+"</p><p>"+o.songjifen+"</p>"
					remai.className = 'remai';
					remaibox.appendChild(remai);
			}
		} 
		else {  //如果当前页小于maxPage
			for (var i = maxPage*(p-1); i < currentArr.length; i++){
				var o = currentArr[i];
					var remai = document.createElement('div');
					remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+o.id+"'><img src='../img/"+o.img+"' /></a><span>"+o.content+"</span><p class='jiacu'>"+o.price+"</p><p>"+o.songjifen+"</p>"
					remai.className = 'remai';
					remaibox.appendChild(remai);
			}
		}
}else{
		k =decodeURIComponent(k);
		var kindCurrentNum = 0;  //当前种类的总数
		for(var i = 0; i < allarr.length; i++){
			var o = allarr[i];
			var reg = "/"+k+"/";
//			console.log(allarr[i].title)
			if(allarr[i].title.indexOf(k)!=-1){
				currentArr[kindCurrentNum++] = o;
			}
		}
		//页数li
		var ol = document.getElementById('pageIndex');
		ol.innerHTML = '';
		liNum = Math.ceil(kindCurrentNum/maxPage);
		for(var i = 0; i < liNum; i++){
			var li = document.createElement('li');
			li.index = i+1; 
			li.innerHTML = "<a class='indexli' href='javascript:getPage("+li.index+");'>"+li.index+"</a>";
//			li.onclick = function(){
//				var indexli = document.getElementsByClassName('indexli');
//				for(var j = 0; j < indexli.length; j++){
//					indexli[j].style.backgroundColor = 'none';
//				}
//				this.style.backgroundColor = 'red';
//			}
			ol.appendChild(li);
		}
		if(liNum <= maxPage){
//			alert();
			leftbtn.style.display = 'none';
			rightbtn.style.display = 'none';
			ol.style.display = 'none';
		}
		
		
		var remaibox = document.getElementsByClassName('remaibox')[0];
		remaibox.innerHTML = '';
		//当前页需要显示的商品数小于等于总数（还能输出4个商品）
		if (kindCurrentNum-maxPage*p >= 0){
			for (var i = maxPage*(p-1); i < p*maxPage; i++){
				var o = currentArr[i];
					var remai = document.createElement('div');
					remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+o.id+"'><img src='../img/"+o.img+"' /></a><span>"+o.content+"</span><p class='jiacu'>"+o.price+"</p><p>"+o.songjifen+"</p>"
					remai.className = 'remai';
					remaibox.appendChild(remai);
			}
		} 
		else {  //如果当前页小于maxPage
			for (var i = maxPage*(p-1); i < currentArr.length; i++){
				var o = currentArr[i];
					var remai = document.createElement('div');
					remai.innerHTML="<a target='_blank' href='../main/goodDetail.html?id="+o.id+"'><img src='../img/"+o.img+"' /></a><span>"+o.content+"</span><p class='jiacu'>"+o.price+"</p><p>"+o.songjifen+"</p>"
					remai.className = 'remai';
					remaibox.appendChild(remai);
			}
		}
	}
	
	
	
	
}

leftbtn.onclick = function(){
	if(--p < 1) p = 1;
		
	getPage(p);
	
}
rightbtn.onclick = function(){
	if(++p > liNum)
		p = liNum;
	
	getPage(p);
}


var navlefta = document.getElementsByClassName('navlefta')[0];
navlefta.onclick = function(){
	location.href = 'navPage1.html?id=';
}
