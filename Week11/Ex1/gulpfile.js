/**
 * Created by FiShelly on 2016/7/2.
 */
var gulp = require('gulp'),
    less = require('gulp-less');
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    seajsCombo = require( 'gulp-seajs-combo' );

gulp.task('ex1', function () {
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


gulp.task('minifyjs', function() {
    return gulp.src('js/m*.js')
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify({
            mangle:{
                except:['require','exports','module']}}))    //压缩   //压缩
        .pipe(gulp.dest('js'));  //输出
});

gulp.task('default',['ex1'],  function() {
    gulp.start('minifycss', 'minifyjs');
});