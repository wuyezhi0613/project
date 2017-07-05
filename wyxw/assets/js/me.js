var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
if(isActive){
    console.log("打开状态");
}else{
    console.log("关闭状态");  
}
mui('.mui-switch')['switch']()
document.getElementById("mySwitch").addEventListener("toggle",function(event){
	if(event.detail.isActive){
	    console.log("你启动了开关");
	    document.getElementById("cssFile").href="css/me_black.css"
	}else{
	    console.log("你关闭了开关"); 
	    document.getElementById("cssFile").href="css/me.css";
	}
})

		