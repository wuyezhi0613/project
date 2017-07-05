<template>
	<div id="register-body">
		<div class="register-content">
			<ul>
				<li>
					<input type="text" id="username" value=""  placeholder="邮箱/手机号" />
				</li>
				<li>
					<input type="password" id="password1" value="" placeholder="密码" />
				</li>
				<li>
					<input type="password" id="password2" value="" placeholder="确认密码" />
				</li>
				<li>
					<router-link to="./loginComponent">
						<input type="button" value="注册" id="registerbtn"/></a>
				   </router-link>
				</li>		
			</ul>
		</div>	
	</div>
</template>

<script type='text/ecmascript-6'>
    import "../../../assets/css/register.css";
    export default {}
</script>

<style scoped>
</style>