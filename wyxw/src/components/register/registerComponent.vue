<template>
    <div>
        <register-header></register-header>
        <register-body></register-body>
    </div>
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/css/register.css";
    import registerHeader from "./registerHeader.vue";
    import registerBody from "./registerBody.vue";
    export default {
        components:{
             registerHeader,
             registerBody
        }
    }
</script>

<style scoped>

</style>