<template>
	<div id="setting-body">
        <div class="setting-body-one">
        	<h3>账号设置</h3>
        	<ul>
        		<li>个人设置</li>
        		<li>绑定其他平台</li>
        	</ul>
        </div>
        <div class="setting-body-two">
        	<h3>系统设置</h3>
        	<ul>
        		<li>栏目插件设置</li>
        		<li>
        			<b>个人背景页</b>
        			<p>默认&nbsp;&nbsp;&gt;</p>
        		</li>
        		<li>	
        			<b>字体设置</b>
        			<p>微软雅黑&nbsp;&nbsp;&gt;</p>
        		</li>
        		<li>
        			<b>阅读偏好</b>
        			<p>&gt;</p>
        		</li>
        		<li>       			
        			<b>正文字号</b>
        			<p>中号字&nbsp;&nbsp;&gt;</p>
        		</li>
        		<li>
        			<b>要闻推送</b>
          			<el-switch 
					    v-model="value1"
						on-color="#FF3333"
						off-color="darkgrey">
					</el-switch>
        		</li>
        		<li>
        			<b>跟帖消息推送</b>
        			<el-switch 
					    v-model="value2"
						on-color="#FF3333"
						off-color="darkgrey">
					</el-switch>
        		</li>
        		<li>
        			<b>头条卡集</b>
         			<el-switch 
					    v-model="value3"
						on-color="#FF3333"
						off-color="darkgrey">
					</el-switch>
        		</li>
        		<li>
        			<b>非Wi-Fi网络不下载图片</b>
        			<el-switch 
					    v-model="value4"
						on-color="#FF3333"
						off-color="darkgrey">
					</el-switch>
        		</li>
        		<li>	
        			<b>手动清除缓存</b>
        			<p>4.2M&nbsp;&nbsp;&gt;</p>
        		</li>
        	</ul>
        </div>
        <div class="setting-body-three">
        	<h3>其他设置</h3>
        	<ul>
        		<li>检查更新</li>
        		<li>为网易新闻积分</li>
        		<li>封面故事</li>
        		<li>关于</li>
        	</ul>
        </div>
	</div>
</template>

<script type='text/ecmascript-6'>
    import "../../../assets/css/setting.css";
    export default {
    	data() {
		    return {
		        value1: true,
		        value2: true,
		        value3: true,
		        value4: true
		    }
		}
    }
</script>

<style scoped>
</style>