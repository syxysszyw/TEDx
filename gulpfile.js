var gulp = require('gulp');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var del = require('del');


var sourcePaths = {
	less: ['less/*.less'],
	css:['css/*.css'],
	image:['images/*'],
	pic:['pic/*'],
	html:['html/**/*']
};

var destPaths ={
	statics:['dest/**/*'],
	css:['dest/css/**/*'],
	image:['dest/images/**/*'],
	pic:['dest/pic/**/*'],
	html:['dest/html/**/*']	
}


gulp.task('less', function() {
	
	gulp.src(sourcePaths.less)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css/'))
		.pipe(livereload({start: true}));
		
});

gulp.task('output', function() {
	
	del(['dest/'], function(){
		//压缩图片
		gulp.src(sourcePaths.image)
			.pipe(imagemin())
			.pipe(gulp.dest('dest/images'));
	
		gulp.src(sourcePaths.pic)
			.pipe(imagemin())
			.pipe(gulp.dest('dest/pic'));
		
		//压缩css
		gulp.src(sourcePaths.css)
			.pipe(minifycss())
			.pipe(gulp.dest('dest/css'))
		
		//复制html
		gulp.src(sourcePaths.html) 
			.pipe(gulp.dest('dest/html/'));
	})
		
	
});

gulp.task('dev',['connect'], function() {
	livereload.listen();
	gulp.watch(['less/*.less'],['less']);
});

gulp.task('connect', function(){
	connect.server();
})

gulp.task('dest', ['output']);