<template>
    <div>
        <shop-header></shop-header>
        <shop-body></shop-body>
    </div>
</template>

<script type='text/ecmascript-6'>
    import shopHeader from "./shopHeader.vue";
    import shopBody from "./shopBody.vue";
    import  "../../../assets/css/shop.css";
    export default {
        components:{
            shopHeader,
            shopBody
        }
    }
</script>

<style scoped>

</style>