<template>
    <div id="shop-body">
	    <div class="shop-content">
			<!--轮播图-->
			<div class="swiper-container">
		        <div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="assets/img/a1.jpg"/>
					</div>
					<div class="swiper-slide">
						<img src="assets/img/a2.jpg"/>
					</div>
					<div class="swiper-slide">
						<img src="assets/img/a3.jpg"/>
					</div>
					<div class="swiper-slide">
						<img src="assets/img/a4.jpg"/>
					</div>
				</div>
				<div class="swiper-pagination"></div>
		    </div>
		    <div class="shop-nav">
		    	<ul>
		    		<li>我的商城</li>
		    		<li>金币易捐</li>
		    		<li>每日签到</li>
		    	</ul>
		    </div>
		    <div class="shop-List">
		    	<h3>
		    		<span>金币夺宝</span>
		    	</h3>
		    	<ul>
		    		<!--描述：动态获取商品列表-->
		    	</ul>
		    </div>
		    <div class="loading">
                <img src="assets/img/1.gif" />
		    </div>
		</div>		
	</div>	
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/lib/swiper-3.4.1.min.css";
    import $ from  "../../../assets/lib/jquery-1.8.3.min";
    import Swiper from  "../../../assets/lib/swiper-3.4.1.min";
    import  "../../../assets/js/shop.js";
	import "../../../assets/font/icon/iconfont.css";
    import  "../../../assets/css/shop.css";
    export default {
    	mounted:function(){
    		var mySwiper = new Swiper('.swiper-container',{
				pagination : '.swiper-pagination',
				autoplay : true,
				loop : true,
				speed : 4000
			});
    	}
    }

</script>

<style scoped>
</style>