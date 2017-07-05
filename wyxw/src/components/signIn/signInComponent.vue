<template>
    <div>
        <signIn-header></signIn-header>
        <signIn-body></signIn-body>
    </div>
</template>

<script type='text/ecmascript-6'>
    import signInHeader from "./signInHeader.vue";
    import signInBody from "./signInBody.vue";
    import  "../../../assets/css/signIn.css";
    export default {
        components:{
            signInHeader,
            signInBody
        }
    }
</script>

<style scoped>

</style>