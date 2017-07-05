<template>
	<div id="shop-header">
		<ul>
	        <li><!--返回上一页-->
	        	<a href="#" onClick="javascript :history.back(-1)">
	        		<i class="iconfont icon-quxiao"></i>
	        	</a>
	        </li>
	        <li>金币商城</li>
	        <li><!--弹窗-->	        	
				<p @click="showOutBox()"><i class="iconfont icon-ttpodicon"></i></p>
	        </li>
        </ul> 
       	<div class="outBox">
       		<div class="top"></div>
			<div class="bottom">
	            <input type="button" value="刷新" id="refresh" />
	            <input type="button" value="分享" id="share"/>
	            <input type="button" value="我要报错" id="error"/>
	            <input type="button" value="取消" id="cancel" />
			</div>			
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
    import "../../../assets/lib/swiper-3.4.1.min.css";
    import "../../../assets/lib/jquery-1.8.3.min.js";
    import Swiper from  "../../../assets/lib/swiper-3.4.1.min";
    import "../../../assets/js/shop.js";
	import "../../../assets/font/icon/iconfont.css";
    import "../../../assets/css/shop.css";
    export default {
    	methods:{
    		showOutBox:function(){    			
				$(".outBox").show(function(){
					$(".bottom").show();
				}) 
				$("#refresh").click(function(){
					$(".outBox").hide();
				})
				$("#cancel").click(function(){
					$(".outBox").hide();
				})
				$(".top").click(function(){
				    $(".outBox").hide();
			    });
    		}
    	}
    }
</script>



<style scoped>
</style>