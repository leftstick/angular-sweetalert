'use strict';

var gulp = require('gulp');

gulp.task('copyDemo', function() {
    return gulp.src('./src/ngSweetAlert.js')
        .pipe(gulp.dest('./demo/'));
});

gulp.task('copyDist', function() {
    return gulp.src('./src/ngSweetAlert.js')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('dev', ['copyDemo'], function() {
    var webserver = require('gulp-webserver');
    return gulp.src('./demo/')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: false
        }));
});


gulp.task('dist', ['copyDist'], function() {
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');

    return gulp.src('./dist/ngSweetAlert.js')
        .pipe(rename({basename: 'ngSweetAlert.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
