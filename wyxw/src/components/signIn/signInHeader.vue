<template>
    <div id="signIn-header">
		<ul class="ul1">
	        <li>
	        	<a href="#" onClick="javascript :history.back(-1)"><!--返回上一页-->
	        		<i class="iconfont icon-quxiao"></i>
	        	</a>
	        </li>
	        <li>签到</li>
	        <li><!--弹窗-->
            	<span @click="showBigBox()">分享</span>
	        </li>
        </ul>
        <div class="bigBox">
       		<div class="top"></div>
			<div class="bottom">
	            <ul>
	            	<li>
	            		<i class="iconfont icon-weixin"></i>
	            		<a href="http://p.weixin.qq.com">
	            		    <b>微信</b>
	            		</a>          		
	            	</li>
	            	<li>
	            		<i class="iconfont icon-weibiaoti103"></i>
	            		<b>微信朋友圈</b>
	            	</li>
	            	<li>
	            		<i class="iconfont icon-weibo"></i>
	            		<a href="https://c.weibo.cn">
	            		    <b>微博</b>
	            		</a>
	            	</li>
	            	<li>
	            		<i class="iconfont icon-weibiaoti104"></i>
	            		<a href="http://i.qq.com/">
	            		    <b>QQ空间</b>
	            		</a>
	            	</li>
	            	<li>
	            		<i class="iconfont icon-weibiaoti102"></i>
	            		<a href="http://im.qq.com/mobileqq/">
	            		    <b>QQ</b>
	            		</a>
	            	</li>
	            	<li>
	            		<i class="iconfont icon-gengduo" id="close"></i>
	            		<b>更多</b>
	            	</li>
	            </ul>
			</div>			
		</div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/font/icon/iconfont.css";
    import "../../../assets/css/signIn.css";
    import "../../../assets/lib/swiper-3.4.1.min.css";
    import "../../../assets/lib/jquery-1.8.3.min.js";
    import Swiper from  "../../../assets/lib/swiper-3.4.1.min";
    export default {
    	methods:{
    		showBigBox:function(){    			
				$(".bigBox").show(function(){
					$(".bottom").show();
				}) 
			    $(".top").click(function(){
				    $(".bigBox").hide();
			    });
			    $("#close").click(function(){
					$(".bigBox").hide();
				})
    		}
    	}
    }
</script>



<style scoped>
</style>