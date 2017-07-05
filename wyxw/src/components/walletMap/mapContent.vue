<template>
    <div id="map-Content">
	    <div class="amap-page-container">
	          <el-amap >
		      </el-amap>
	    </div>
	    <div class="footer">
			<a href="#" onClick="javascript :history.back(-1)">
	        	&lt;周边服务
	        </a>
		</div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {}
</script>



<style scoped>
	.amap-page-container {
        width: 100%;
        height: 600px;
    } 
	.footer{
	    height: 44px;
	    background-color: #FF3333;
	    width: 100%;
	    position: fixed;
	    bottom: 0; 
	}    
   
</style>