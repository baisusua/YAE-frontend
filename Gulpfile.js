var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var csso = require('gulp-csso');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');

//less编译和压缩
gulp.task('less', function () {
    gulp.src(['./src/css/base.css' ,'./src/less/*.less'])
        .pipe(less())
        .pipe(concat('all.less'))
        .pipe(minifyCSS())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./src/build/css/'));
});

//js语法检查
gulp.task('jshint', function () {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

//代码测试
gulp.task('mocha', function(){
    return gulp.src("test/test.js", {read: false})
        .pipe(cover.instrument({
            pattern: ['**/test*'],
            debugDirectory: 'debug'
        }))
        .pipe(mocha())
        .pipe(cover.gather())
        .pipe(cover.format())
        .pipe(gulp.dest('reports'));
});

//js压缩
gulp.task('jsMinify', function () {
    return gulp.src(['a.js', 'b.js'])
        .pipe(concat('ab.js'))
        .pipe(uglify())
        .pipe(rename('ab.min.js'))
        .pipe(gulp.dest('/build'))
});

//css压缩
gulp.task('cssMinify', function () {
    return gulp.src(['a.css', 'b.css'])
        .pipe(concat('ab.css'))
        .pipe(csso())
        .pipe(rename('ab.min.css'))
        .pipe(gulp.dest('/build'))
});

//默认task
gulp.task('default', ['less', 'jshint', 'mocha', 'jsMinify', 'cssMinify']);
