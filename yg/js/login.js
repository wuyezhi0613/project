
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
//登录验证
var tel = document.getElementsByClassName('tel')[0];
tel.onblur = function(){
	var uname = this.value;
	if(uname){
		document.getElementsByClassName('telerror1')[0].style.display = 'none';
	}else{
		document.getElementsByClassName('telerror1')[0].style.display = 'inline-block';
	}
}




var loginbtn = document.getElementsByClassName('loginbtn')[0];
var cb = document.getElementsByClassName('cb')[0];
loginbtn.onclick = function(){
	var tel = document.getElementsByClassName('tel')[0];
	var pwd = document.getElementsByClassName('pwd')[0];
	var res = getCookie(tel.value);
	var realres = res.split('&')[0];
	if(realres&&realres==pwd.value){
		if(!cb.checked){
			setCookie(tel.value,pwd.value+"&2",365);
		}
		else {
			setCookie(tel.value,pwd.value+"&1",365);
		}
		location.href = '../index.html?currentuser='+tel.value;
	} else {
		var telerror2 = document.getElementsByClassName('telerror2')[0];
		telerror2.style.display = 'inline-block';
	}
}

