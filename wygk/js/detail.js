var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',
	loop : true
});
var onoff = true
	document.getElementById("qq").onclick = function(){
		if(onoff){
			document.getElementById("qq").style.animationPlayState = 'paused'
			$(".music-play").removeClass('icon-bofang1').addClass('icon-yinlebofang');
			document.getElementById("ado").pause()				
		}else{
			document.getElementById("ado").play()				
			$(".music-play").removeClass('icon-yinlebofang').addClass('icon-bofang1');
			document.getElementById("qq").style.animationPlayState = 'running'
		}
		onoff = !onoff
	}