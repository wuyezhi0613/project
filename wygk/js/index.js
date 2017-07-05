/**
 * Created by Administrator on 2017/6/12.
 */
var onoff = true
	document.getElementById("qq").onclick = function(){
		if(onoff){
			document.getElementById("qq").style.animationPlayState = 'paused'
			$(".music-play").removeClass('icon-pause').addClass('icon-zanting3');
			document.getElementById("ado").pause()				
		}else{
			document.getElementById("ado").play()				
			$(".music-play").removeClass('icon-zanting3').addClass('icon-pause');
			document.getElementById("qq").style.animationPlayState = 'running'
		}
		onoff = !onoff
	}