function setCookie(_name, _value, _date){
	var d=new Date();
	d.setDate(d.getDate()+_date);
	document.cookie=_name+"="+encodeURIComponent(_value)+"; path=/; expires="+d.toGMTString();	
}

function getCookie(_name){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0; i<arr.length; i++){
		var col=arr[i].split("=");	
		if(col[0]==_name){
			return decodeURIComponent(col[1]);
		}
	}
	return "";
}
