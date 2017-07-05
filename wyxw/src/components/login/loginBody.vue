<template>
	<div id="login-body">
			<div class="login-body-top">
				<ul>
					<li>
						<i class="iconfont icon-geren"></i>
						<input type="text" id="username" value=""  placeholder="邮箱/手机号" />
					</li>
					<li>
						<i class="iconfont icon-mima-copy-copy"></i>
						<input type="password" id="password" value="" placeholder="密码" />
					</li>
					<li>
						<a href="../me.html"><input type="button" value="登录" id="loginbtn"/></a>
					</li>		
				</ul>
			</div>
			<div class="login-body-bottom">
				<span>—使用其他方式登录—</span>
				<ul>
					<li>
						<i class="iconfont icon-weixin1"></i>
					</li>
					<li>
						<i class="iconfont icon-weibo"></i>
					</li>
					<li>
						<i class="iconfont icon-weibiaoti102"></i>
					</li>
				</ul>
				<router-link to="./registerComponent">
					<p>注册&gt;</p>
				</router-link>
			</div>
		</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/font/icon/iconfont.css";
    import "../../../assets/css/login.css";
    export default {}
</script>

<style scoped>
</style>