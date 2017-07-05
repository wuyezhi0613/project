<template>
	<div>
		<m-header></m-header>
		<m-content></m-content>
		<m-footer></m-footer>
    </div>
</template>


<script type='text/ecmascript-6'>
import mHeader from "./mHeader.vue";
import mContent from "./mContent.vue";
import mFooter from "./mFooter.vue";
import "../../../assets/css/me.css";
export default {
    components:{
        mHeader,
        mContent,
        mFooter
    }
}
</script>

<style scoped>

</style>