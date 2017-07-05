<template>
    <div id="me-content">
        <div class="me-content-one">
        	<ul>
        		<li>
        			<i class="iconfont icon-lingdang"></i>
        			<b>我的消息</b>
        			<p>评论我的跟帖/通知&nbsp;&nbsp;&gt;</p>
        		</li>
        		<li>
        			<i class="iconfont icon-20151209tubiaolianxizhuanhuan21"></i>
        			<b>最新动态</b>
        			<p>&gt;</p>
        		</li>
        	</ul>
        </div>
        <div class="me-content-two">
        	<ul>
        		<li>
        			<i class="iconfont icon-gouwudai"></i>
        			<b>金币商城</b>
        			<router-link to="./shopComponent">
					<p>新朋友专享彩票，赌一把&nbsp;&nbsp;&gt;</p>
				    </router-link>
        		</li>
        		<li>
        			<i class="iconfont icon-cmstubiaozitihua08"></i>
        			<b>金币任务</b>
        			<p>&gt;</p>
        		</li>
        		<li>
        			<i class="iconfont icon-qianbao"></i>
        			<b>我的钱包</b>       			
					<router-link to="./walletComponent">
					<p>集卡赢OPPO拍照手机&nbsp;&nbsp;&gt;</p>
					</router-link>
        		</li>
        	</ul>
        </div>
        <div class="me-content-three">
        	<ul>
        		<li>
        			<i class="iconfont icon-lixianzhongxin"></i>
        			<b>离线阅读</b>
        			<p>&gt;</p>
        		</li>
        		<li>
        			<i class="iconfont icon-yejianmoshi"></i>
        			<b>夜间模式</b>
        			<el-switch 
					    v-model="value1"
						on-color="#FF3333"
						off-color="darkgrey">
					</el-switch>
        		</li>
        		<li>
        			<i class="iconfont icon-qiqiu"></i>
        			<b>活动广场</b>
        			<p>&gt;</p>
        		</li>
        		<li>
        			<i class="iconfont icon-yijianfankui"></i>
        			<b>意见反馈</b>
        			<p>&gt;</p>
        		</li>
        	</ul>
        </div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/font/icon/iconfont.css";
    import "../../../assets/css/me.css";
    export default {
		data() {
		    return {
		        value1: false
		    }
		}
    }
</script>

<style scoped>

</style>