<template>
	<div>
		<router-link to="/meComponent"></router-link>
		<router-link to="/SetComponent"></router-link>
		<router-link to="/loginComponent"></router-link>
		<router-link to="/registerComponent"></router-link>
		<router-link to="/shopComponent"></router-link>
		<router-link to="/walletComponent"></router-link>
		<router-link to="/mapComponent"></router-link>
		<router-link to="/signInComponent"></router-link>
		<transition
	                name="fade"
	                enter-active-class="animated bounceInRight"
	                leave-active-class="animated bounceOutRight"
	        >
	           <router-view></router-view>
	        </transition>
	</div>
</template>


<script type='text/ecmascript-6'>
import meComponent from "./components/meLibrary/meComponent.vue";
import SetComponent from "./components/SetLibrary/SetComponent.vue";
import loginComponent from "./components/login/loginComponent.vue";
import registerComponent from "./components/register/registerComponent.vue";
import shopComponent from "./components/shop/shopComponent.vue";
import walletComponent from "./components/wallet/walletComponent.vue";
import mapComponent from "./components/walletMap/mapComponent.vue";
import signInComponent from "./components/signIn/signInComponent.vue";
    export default {    	
		components:{
			meComponent,
			SetComponent,
			loginComponent,
			registerComponent,
			shopComponent,
			walletComponent,
			mapComponent,
			signInComponent
		}
    }
</script>

<style scoped>
    
</style>