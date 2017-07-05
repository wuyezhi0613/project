<template>
	<div id="me-header">
		<div class="me-header-top">
			<div class="me-header-one">
				<!--跳转至设置页 -->
				<router-link to="./SetComponent">
					<i class="iconfont icon-iconziti09">
						<b>设置</b>
					</i>
				</router-link>
		    </div>
			<div class="me-header-two">
				<!--跳转至登录页 -->
				<router-link to="./loginComponent">
					<span id="login">登录</span>
				</router-link>
				<!--跳转至注册页 -->
				<router-link to="./registerComponent">
					手机号快速注册&gt;
				</router-link>
				
				<span id="signIn">
					<router-link to="./signInComponent">
						<i class="iconfont icon-rili">
							<b>签到</b>
						</i>
				   </router-link>					
				</span>
			</div>
			<div class="me-header-three">
				<ul>
					<li>
						<a href="#">
							<i class="iconfont icon-weixin"></i>
							<b>微信登录</b>
						</a>
					</li>|
					<li>
						<a href="#">
							<i class="iconfont icon-iconfontweibowukuang"></i>
							<b>微博登录</b>
						</a>
					</li>|
					<li>
						<a href="#">
					        <i class="icon iconfont icon-qq"></i>	
					        <b>QQ登录</b>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="me-header-bottom">
			<div class="me-header-bottom out">
				<div class="me-header-four">
					<ul>
						<li><a href="#">我关注的</a></li>|
						<li><a href="#">我的粉丝</a></li>
					</ul>
				</div>
				<div class="me-header-five">
					<ul>
						<li>
							<i class="iconfont icon-dingyue01"></i>
							<b>订阅</b>
						</li>
						<li>
							<i class="iconfont icon-shoucang-shoucang"></i>
							<b>收藏</b>
						</li>
						<li>
							<i class="iconfont icon-fatie"></i>
							<b>跟帖</b>
						</li>
						<li>
							<i class="iconfont icon-liulanjilu"></i>
							<b>阅读</b>
						</li>
					</ul>
				</div>
			</div>				
		</div>	
	</div> 
</template>


<script type='text/ecmascript-6'>
    import "../../../assets/font/icon/iconfont.css";
    import "../../../assets/css/me.css";
    export default {}
</script>

<style scoped>


</style>