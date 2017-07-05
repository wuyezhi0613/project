function loadSearchsHeader(){
	$('#main-header').load('searchs.html #searchs-header' , function(){
        $(document).ready(function(){
        	var showletter = "";
		    $(".showkeyword").keyup(function () {	 
		    	$(".searchlist ul").html("")
		        var formletter = /[a-z]$/;		        
		        if (!formletter.test($(this).val())) {
		            if (showletter != $(this).val()) { 
		                showletter = $(this).val();
		                showsearch(showletter);
		            }
		        }
		    });
		    
		    function showsearch(keyword) {
		    	var text = encodeURIComponent(keyword)
		        fetch("http://route.showapi.com/213-1?showapi_appid=40027&showapi_sign=91b0a7a866d5483691b6ec37926d8cdb&keyword="+text+"&page=1").then(function(response) {
				    return response.json();
				}).then(function(data) {
				    console.log(data);
					var musicArr = data.showapi_res_body.pagebean.contentlist
					console.log(musicArr[0])
						//列表对应标题、图片变化						
					musicArr.map(function(item,i){
						var str = '<li contenturl='+item.url+'><span class="songname">'+item.songname+'</span><p class="singername">'+item.singername+'</p></li>';
						$(".searchlist ul").append(str);					
					})
						//点击播放歌曲
				})
            }
        })
	})
}

function loadSearchsBody(){
	$('#main-body').load('searchs.html #searchs-body' , function(){

	})
}
