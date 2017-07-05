<template>
    <div>
        <set-header></set-header>
        <set-body></set-body>
    </div>
</template>

<script type='text/ecmascript-6'>
	import "../../../assets/css/setting.css";
    import setHeader from "./setHeader.vue";
    import setBody from "./setBody.vue";
    export default {
        components:{
             setHeader,
             setBody
        }
    }
</script>

<style scoped>

</style>