'use strict';

var gulp = require('gulp');
var gulp_uglify = require('gulp-uglify');
var gulp_rename = require('gulp-rename');

gulp.task('uglify', function () {
    var uglifyOption = {
        preserveComments: 'all'
    };
    gulp.src('src/format.prototype.js')
        .pipe(gulp_uglify(uglifyOption))
        .pipe(gulp_rename('format.prototype.min.js'))
        .pipe(gulp.dest('dist'));

    gulp.src('src/format.function.js')
        .pipe(gulp_uglify(uglifyOption))
        .pipe(gulp_rename('format.function.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('src/*', [ 'uglify' ]);
});

gulp.task('default', [ 'uglify' ]);