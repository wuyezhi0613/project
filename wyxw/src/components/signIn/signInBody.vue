<template>
	<div id="signIn-body">
       	    <div class="signIn-content-one">
       	    	<ul>
       	    		<li>
       	    			<p>
       	    			<i class="iconfont icon-liwu"></i>
       	    			   63金币
       	    			</p>
       	    		</li>
       	    		<li><p>藏鸡阁&gt;</p></li>
       	    	</ul>
       	    </div>
       	    <div class="signIn-content-two">
       	    	<span class="aa">听说签到点鸡会得到鸡主送的礼物?</span>
       	    	<span class="bb">
       	    		<i class="iconfont icon-ji"></i>
       	    	</span>
       	    </div> 
       	    <div class="signIn-content-three">
       	    	<h4><b>{{iNum}}</b>/28天</h4>
       	    	<ul id="xiaoji">
					  <li v-for="n in list">					    
					    <i class="iconfont icon-ji" ></i><p>14金币</p>
					  </li>
				</ul>
       	    	<span>？签到规则<p>连续断签七天，退回起点</p></span>       	    	
       	    </div>
       	    <div class="signIn-content-four">
       	    	<div class="sign-left">
       	    		<div id="date" onload="currentTime()">
       	    			<i>25</i>
       	    			<b>2017.06</b>
       	    		</div>
       	    		<span>每日一签</span>
       	    	</div>
       	    	<div class="sign-right">
       	    		<h5>温故而知新闻</h5>
       	    		<p>当今天的新闻都沦为谈资，过去的旧闻更应该拿出来反思，启发思考。</p>
       	    		<span>每日签&gt;</span>
       	    	</div>       	    	
       	    </div>
       	    <div class="signIn-content-five">
       	    	<div class="constellation-left">
       	    		<div class="icon">
       	    			<i class="iconfont icon-xingzuoshuangzizuo"></i>
       	    		</div>
       	    		<p>双子座</p>
       	    		<b>05.21~06.21</b>
       	    		<span>更换星座</span>
       	    	</div>
       	    	<div class="constellation-right">
       	    		<h5>
       	    			今日整体运势
       	    			<i class="iconfont icon-xingxing"></i>
       	    			<i class="iconfont icon-xingxing"></i>
       	    			<i class="iconfont icon-xingxing"></i>
       	    			<i class="iconfont icon-xingxing"></i>
       	    			<i class="iconfont icon-xingxing"></i>
       	    		</h5>   	    		
       	    		<p>头有点痛，心还有点累，易疲劳，易流眼泪……你像个多愁善感的文艺青年，有四体不勤之嫌。多活动身体，尤其应常去户外呼吸新鲜空气，身心的感觉会越来越好。</p>
       	    	</div>       	    	
       	    </div>
       	    <div class="swiper-container">
		        <div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="assets/img/a1.jpg"/>
					</div>
					<div class="swiper-slide">
						<img src="assets/img/a2.jpg"/>
					</div>
				</div>
				<div class="swiper-pagination"></div>
		    </div>
       </div>
</template>


<script type='text/ecmascript-6'>
	import "../../../assets/font/icon/iconfont.css";
    import  "../../../assets/css/signIn.css";
    import "../../../assets/lib/swiper-3.4.1.min.css";
    import Swiper from  "../../../assets/lib/swiper-3.4.1.min";
    export default {
    	mounted:function(){
    		var mySwiper = new Swiper('.swiper-container',{
				pagination : '.swiper-pagination',
				autoplay : true,
				speed : 4000
			});
			
			var icolor = localStorage.getItem('icolor')
			var iNum= localStorage.getItem("iNum")
			this.iNum = iNum;
			$(".signIn-content-three li:lt("+iNum+")").find("i").css("color",icolor)	
			console.log(icolor)
			console.log(iNum)	
			$("i").click(function(){
				$(this).css("color","gold");
				var index = $(this).parent().index()+1;
				localStorage.setItem("iNum",index)
				localStorage.setItem("icolor",$(this).css("color"))		
			})
			var pText = localStorage.getItem('pText')
			var pNum= localStorage.getItem('pNum')
			$(".signIn-content-three li:lt("+pNum+")").find("p").text("已签")
			console.log(pText)
			console.log(pNum)
			$("p").click(function(){
				$(this).text("已签")
				var index = $(this).parent().index()+1;
				localStorage.setItem("pNum",index)
				localStorage.setItem("pText",$(this).text("已签"))		
			})
		},
    	data:function() {
			return{
				list: new Array(28),
			    iNum:0
			}
	    }   	
    }
    
</script>



<style scoped>
</style>