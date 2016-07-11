/**
 * Created by FiShelly on 2016/7/2.
 */
var gulp = require('gulp'),
    less = require('gulp-less');
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('createCss', function () {
    gulp.src('less/index.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});
gulp.task('minifycss', function() {
    return gulp.src('css/index.css')      //压缩的文件
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));   //执行压缩
});

gulp.task('default',['createCss'],  function() {
    gulp.start('minifycss');
    //gulp.watch('./less/index.css', function(){
    //    gulp.run('createCss');
    //});
});