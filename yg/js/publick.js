if(!document.getElementsByClassName){
  document.getElementsByClassName = function(className, element){
    var children = (element || document).getElementsByTagName('*');
    var elements = new Array();
    for (var i=0; i<children.length; i++){
      var child = children[i];
      var classNames = child.className.split(' ');
      for (var j=0; j<classNames.length; j++){
        if (classNames[j] == className){ 
          elements.push(child);
          break;
        }
      }
    } 
    return elements;
  };
}


//---------top样式
var toplast = document.getElementsByClassName('toplast')[0];
var personList = document.getElementsByClassName('personList')[0];
toplast.onmouseover = function(){
	personList.style.display = 'block';
}
toplast.onmouseout = function(){
	personList.style.display = 'none';
}

var lefttwo = document.getElementsByClassName('lefttwo')[0];
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

//--------------------check currentuser-------------------------
var usernameimp;
var cookie = document.cookie;
var cookiearr=cookie.split("; ");

for(var i=0; i<cookiearr.length; i++){
	var col=cookiearr[i].split("=");	
//	col[0] = decodeURIComponent(col[0]);
	col[1] = decodeURIComponent(col[1]);
	
	var autoIndex = col[1].indexOf('&');
	if(autoIndex != -1){
		usernameimp = col[0];
		var toplogin = document.getElementsByClassName('toplogin')[0];
		var mid = document.getElementsByClassName('mid')[0];
		toplogin.innerHTML = "<a href='personal/personalInfor.html'>欢迎："+col[0]+"</a>";
		mid.innerHTML = "<a href='javascript:exit("+col[0]+")'>[退出]</a>"
		break;
	}
	
}

//---关闭修改cookie登录状态
function isclearcookie(){
	var Ausername,Apwd;
	var cookie = document.cookie;
	var arr=cookie.split("; ");
	for(var i=0; i<arr.length; i++){
		var col=arr[i].split("=");	
		col[1] = decodeURIComponent(col[1]);
		var autoIndex = col[1].indexOf('&');
		if(autoIndex != -1){
			Ausername = col[0];
			Apwd = col[1];
		}
	}
	try{
		if(Apwd.charAt(Apwd.length-1) == 2){
			var str = Apwd.substring(0,Apwd.length-2)
			setCookie(Ausername,str,365);
		}
	} catch(e){

	}
}

window.onunload = function(){
	isclearcookie(); 
}
  

window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop >= 600){
		var fanhui = document.getElementById('fanhui');
		fanhui.style.display = 'block';
	}
	else {
		var fanhui = document.getElementById('fanhui');
		fanhui.style.display = 'none';
	}
}

function toTop(){
	scroll(0,0);
}



