function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function startMove(obj, json,fn){
	clearInterval(obj.timer);
		
		obj.timer = setInterval(function(){
			var flag = true;
			for(var attr in json){
				var end = json[attr];
				var start = getStyle(obj,attr);
				if(attr == 'opacity'){
					start = Math.round(parseFloat(start)*100);
				} else {
					start = parseInt(start);
				}
				var speed = (end - start)/7;
				speed = (speed>0) ? Math.ceil(speed) : Math.floor(speed);
				if(attr == 'opacity'){
					obj.style[attr] = (start+speed)/100;
					obj.style.filter = 'alpha(opacity:'+(start+speed)+')';
				} else {
					obj.style[attr] = start + speed +'px';
				}
				if(start == end){
					//clearInterval(obj.timer);
				} else {
					flag = false;
				}
			}
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		},60)
	
}