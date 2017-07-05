<template>
    <div>
        <login-header></login-header>
        <login-body></login-body>
    </div>
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/css/login.css";
    import loginHeader from "./loginHeader.vue";
    import loginBody from "./loginBody.vue";
    export default {
        components:{
             loginHeader,
             loginBody
        }
    }
</script>

<style scoped>

</style>