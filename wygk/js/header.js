$('#main-header').load('header.html' , function(){
	loadMusicBody();
	
	//load完成后的所有操作都要放在回调函数当中
	console.log($('#main-header').find('li').eq(0))
	$('#main-header').find('li').eq(0).addClass('active')
	
	$('#main-header').find('li').on('touchend' , function(){
		var activeIndex = $(this).index();		
		console.log(activeIndex)		
		switch(activeIndex){
			case 0 : 
				loadMusicBody();
				break;
			case 1 : 
				loadMeBody();
				break;
			case 2 :
			    loadSearchsHeader();
				loadSearchsBody();
				break;
			case 3 :
			    loadSettingHeader();
				loadSettingBody();
				break;
		}
	$(this).addClass('active').siblings().removeClass('active')	
	})
})