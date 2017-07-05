var ajax={
	get:function (url, fnSucc){
		var xhr;
		if( window.XMLHttpRequest ){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}
		xhr.open("get", url, true);	
		xhr.send();
		xhr.onreadystatechange=function(){
			if( xhr.readyState==4 && xhr.status==200 ){
				var str = xhr.responseText;
				if(fnSucc){
					fnSucc( str );	//回调函数
				}
			}
		}
	},
	post:function (url, arg, fnSucc){
		var xhr;
		if( window.XMLHttpRequest ){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}
		xhr.open("post", url, true);	
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(arg);
		xhr.onreadystatechange=function(){
			if( xhr.readyState==4 && xhr.status==200 ){
				var str = xhr.responseText;
				if(fnSucc){
					fnSucc( str );	//回调函数
				}
			}
		}
	}	
}