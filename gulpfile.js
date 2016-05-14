var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('meow', function() {
    console.log('hello, mthc');
});

gulp.task('less', function () {
    return gulp.src('./src/less/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/less/style.less',['less']);
});