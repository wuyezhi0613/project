var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',
	autoplay : true,
	loop : true,
	speed : 4000
});
window.onload=function(){
	$.ajax({
		type:"post",
		url:"http://route.showapi.com/907-4?showapi_appid=40027&showapi_sign=91b0a7a866d5483691b6ec37926d8cdb&",
		async:true,
		dataType:'JSON',
		beforeSend : function(){
			$('.shop-List').hide()
			$('.loading').show()
		},
		success : function(data){
			$('.shop-List').show()
			$('.loading').hide()
			console.log(data);
			var shopArr = data.showapi_res_body.list
			console.log(shopArr[0])
				//列表对应标题、图片变化
			$(this).find(".shopImg").css({"background":"url("+shopArr[0].img+") no-repeat","background-size":"cover"})
			shopArr.map(function(item,i){
				var str = '<li shopArr='+item.url+'><dl><dt><img src="'+item.img+'"></dt><dd><p class="title">'+item.title+'</p><b class="price">'+item.price+'</b></dd></dl></li>';
				$(".shop-List ul").append(str);
		   })
		}	
	})	    
}
	
$(".showOutBox").click(function(){
	$(".outBox").show(function(){
	})
})  
$("#refresh").click(function(){
	$(".outBox").hide();
})
$("#cancel").click(function(){
	$(".outBox").hide();
})
$(".top").mouseup(function(){
    $(".outBox").hide();
});
