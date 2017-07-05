function loadMusicBody(){
	$('#main-body').load('music.html #music-body' , function(){
		var mySwiper = new Swiper('.swiper-container',{
			autoplay : true,
			loop : true,
			speed : 4000
		});	
		fetch("http://route.showapi.com/213-4?showapi_appid=40027&showapi_sign=91b0a7a866d5483691b6ec37926d8cdb&topid=26&").then(function(response){
		    return response.json();
		}).then(function(data){
		    console.log(data);
			var songArr = data.showapi_res_body.pagebean.songlist
			console.log(songArr[0])
				//列表对应标题、图片变化
			$(this).find(".bigImg").css({"background":"url("+songArr[0].albumpic_big+") no-repeat","background-size":"cover"})
			for(var j=1;j<=6;j++){
				item=songArr[j];
				var str = '<li songurl='+item.url+'><dl><dt><a href="songList.html"><img src="'+item.albumpic_small+'"></a><a href="detail.html"><i class="icon iconfont icon-zanting"></i></a></dt><dd><span class="songname">'+item.songname+'</span><p class="singername">'+item.singername+'</p></dd></dl></li>'
				//$(".list_1 ul").append(str);
				var oul =$(".music-content").find(".list_1 ul")
		            console.log(oul)
		            oul.append(str);
			}	
		});
		
		fetch("http://route.showapi.com/213-4?showapi_appid=40027&showapi_sign=91b0a7a866d5483691b6ec37926d8cdb&topid=5&").then(function(response){
		    return response.json();
		}).then(function(data){
		    console.log(data);
			var songArr = data.showapi_res_body.pagebean.songlist
			console.log(songArr[0])
				//列表对应标题、图片变化
			$(this).find(".bigImg").css({"background":"url("+songArr[0].albumpic_big+") no-repeat","background-size":"cover"})
			for(var k=1;k<=4;k++){
				item=songArr[k];
				var str = '<li songurl='+item.url+'><dl><dt><img src="'+item.albumpic_small+'"/></dt><dd><i class="songname">'+item.songname+'</i><p class="singername">'+item.singername+'</p></dd><a href="detail.html"><span class="icon iconfont icon-yinlebofang"></span></a></dl></li>';
				//$(".list_1 ul").append(str);
				var oli =$(".music-content").find(".list_2 ul")
		            console.log(oli)
		            oli.append(str);
		            
			}	
		})
	})
}
