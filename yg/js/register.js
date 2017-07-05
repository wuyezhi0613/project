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

//注册验证

var flagtel = false, flagyzm = false, flagemail = false, flagpwd=false,flagpwd2=false;
//电话判断框

var tel = document.getElementsByClassName('tel')[0];
var err = document.getElementsByClassName('err');
tel.onblur = function(){
	var reg = /^1[3|4|5|7|8]\d{9}$/;
	if(reg.test(this.value)){
		var old = getCookie(this.value);
		if(!old){
			err[0].innerHTML = 'ok';
			err[0].style.color = 'green';
			flagtel = true;
		} else {
			err[0].innerHTML = '该账号已被注册';
			err[0].style.color = 'red';
			flagtel = false;
		}
	} else {
		err[0].innerHTML = '请填写正确的手机号';
		err[0].style.color = 'red';
		flagtel = false;
	}
}
//验证码产生和判断
var getyzm = document.getElementsByClassName('getyzm')[0];
var flaggetyzm=true;
var yzm;
getyzm.onclick = function(){
	if(flaggetyzm){
		getyzm.style.color = 'white';
		getyzm.style.border = 'none';
		flaggetyzm = false;
		str = '';
		for(var i = 0; i < 4; i++)
			str+=Math.floor(Math.random()*10);
		yzm = str;
		alert("验证码为："+str);
		setTimeout(function(){
			flaggetyzm = true;
			getyzm.style.color = 'black';
		getyzm.style.border = '1px solid black';
		},5000);
	}
}
var yzmtxt = document.getElementsByClassName('yzmtxt')[0];
yzmtxt.onblur = function(){
	if(yzm == yzmtxt.value && yzm != ''){
		err[1].innerHTML = 'ok';
		err[1].style.color = 'green';
		flagyzm = true;
	} else {
		err[1].innerHTML = '验证码不正确';
		err[1].style.color = 'red';
		flagyzm = false;
	}
}
//email判断框
var email = document.getElementsByClassName('email')[0];
email.onblur = function(){
	var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	if(reg.test(this.value)){
		err[2].innerHTML = 'ok';
		err[2].style.color = 'green';
		flagemail = true;
	} else {
		err[2].innerHTML = '请填写正确的邮箱';
		err[2].style.color = 'red';
		flagemail = false;
	}
}
//密码1输入判断
var times = 0;
var pwd = document.getElementsByClassName('pwd')[0];
pwd.onblur = function(){
	var reg = /^\d{6,20}$/;
	if(reg.test(this.value)){
		err[3].innerHTML = 'ok';
		err[3].style.color = 'green';
		flagpwd = true;
	} else {
		err[3].innerHTML = '密码应为6-20位';
		err[3].style.color = 'red';
		flagpwd = false;
	}
	if(times == 1){
		pwd2.onblur();
	}
	times = 1;
}
//密码2输入判断
var pwd2 = document.getElementsByClassName('pwd2')[0];
pwd2.onblur = function(){
	if(this.value == pwd.value && this.value!=''){
		err[4].innerHTML = 'ok';
		err[4].style.color = 'green';
		flagpwd2 = true;
	} else {
		err[4].innerHTML = '两次输入密码不一致';
		err[4].style.color = 'red';
		flagpwd2 = false;
	}
}

var registerbtn = document.getElementsByClassName('registerbtn')[0];
var cb = document.getElementsByClassName('cb')[0];
registerbtn.onclick = function(){
	tel.onblur();
	yzmtxt.onblur();
	email.onblur();
	pwd.onblur();
	pwd2.onblur();
	if(flagtel&&flagyzm&&flagemail&&flagpwd&&flagpwd2&&cb.checked){
		var tell = document.getElementsByClassName('tel')[0];
		var pwd1 = document.getElementsByClassName('pwd')[0];
		setCookie(tell.value,pwd1.value,365);
		alert('恭喜您，注册成功');
		location.href='login.html';
	} 
}

//初始化页面所有的输入框为空
tel.value='';
yzmtxt.value='';
email.value='';
pwd.value='';
pwd2.value='';

