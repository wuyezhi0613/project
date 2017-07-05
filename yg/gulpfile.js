var gulp = require("gulp");
//写个copy任务

gulp.task("copytosever",function(){
	gulp.src(["*.php","*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701"));
});

gulp.task("copytoseverjs",function(){
	
	gulp.src(["js/*.js"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/js"));
});
gulp.task("copytoseverlogin",function(){
	
	gulp.src(["login/*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/login"));
});
gulp.task("copytoseverphp",function(){
	
	gulp.src(["php/*.php"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/php"));
});
gulp.task("copytosevercss",function(){
	
	gulp.src(["css/**.*"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/css"));
});
gulp.task("copytosevercart",function(){
	
	gulp.src(["cart/*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/cart"));
});
gulp.task("copytoseverdata",function(){
	
	gulp.src(["data/*.txt"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/data"));
});
gulp.task("copytoseverimg",function(){
	
	gulp.src(["img/**.*"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/img"));
});
gulp.task("copytosevermain",function(){
	
	gulp.src(["main/*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701/main"));
});
gulp.task("copytoseverscss",function(){
	
	gulp.src(["*.scss"]).pipe(gulp.dest("D:/phpStudy/WWW/web1701"));
});
gulp.task("watchall",function(){
	gulp.watch(["*.php","*.html"],["copytosever"]);
	gulp.watch(["js/*.js"],["copytoseverjs"]);	
	gulp.watch(["login/*.html"],["copytoseverlogin"]);
	gulp.watch(["php/*.php"],["copytoseverphp"]);
	gulp.watch(["css/**.*"],["copytosevercss"]);
	gulp.watch(["cart/*.html"],["copytosevercart"]);
	gulp.watch(["data/*.txt"],["copytoseverdata"]);
	gulp.watch(["img/**.*"],["copytoseverimg"]);
	gulp.watch(["main/*.html"],["copytosevermain"]);
	gulp.watch(["*.scss"],["copytoseverscss"]);
});

