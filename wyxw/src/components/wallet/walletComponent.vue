<template>
    <div>
        <wallet-header></wallet-header>
        <wallet-body></wallet-body>
    </div>
</template>

<script type='text/ecmascript-6'>
    import walletHeader from "./walletHeader.vue";
    import walletBody from "./walletBody.vue";
    import  "../../../assets/css/wallet.css";
    export default {
        components:{
            walletHeader,
            walletBody
        }
    }
</script>

<style scoped>

</style>