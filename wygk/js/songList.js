window.onload=function(){	
	fetch("http://route.showapi.com/213-4?showapi_appid=40027&showapi_sign=91b0a7a866d5483691b6ec37926d8cdb&topid=26&").then(function(response) {
		  return response.json();
		}).then(function(data) {
		  console.log(data);
				var songArr = data.showapi_res_body.pagebean.songlist
				console.log(songArr[0])
					//列表对应标题、图片变化
				$(this).find(".bigImg").css({"background":"url("+songArr[0].albumpic_big+") no-repeat","background-size":"cover"})
				songArr.map(function(item,i){
					var str = '<li songurl='+item.url+'><img src="'+item.albumpic_small+'" /><div><span class="songname">'+item.songname+'</span><p class="singername">'+item.singername+'</p></div><a href="detail.html"><i class="icon iconfont icon-yinlebofang"></i></a></li>';
					$(".sl-foot ul").append(str);
					
				})
				//点击播放歌曲
		  })

}
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