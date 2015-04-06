'use strict';

var pack = require('./package.json');
var gulp = require('gulp');
var gulp_clean = require('gulp-clean-dest');
var gulp_uglify = require('gulp-uglify');
var gulp_rename = require('gulp-rename');

gulp.task('uglify', function () {
    gulp.src('src/format.prototype.js')
        .pipe(gulp_uglify())
        .pipe(gulp_rename('format.prototype.min.js'))
        .pipe(gulp.dest('dist'));

    gulp.src('src/format.function.js')
        .pipe(gulp_uglify())
        .pipe(gulp_rename('format.function.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify'], function () { });