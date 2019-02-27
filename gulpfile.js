'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer  = require("gulp-autoprefixer");
const plumber       = require("gulp-plumber");
const colors        = require("ansi-colors");
const notifier      = require("node-notifier");


function showError(err) {
    notifier.notify({
        title: "Error in sass",
        message: err.messageFormatted
    });

    console.log(colors.red("==============================="));
    console.log(colors.red(err.messageFormatted));
    console.log(colors.red("==============================="));
    this.emit("end");
}

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/scss/framekor.scss')
        .pipe(plumber({ //zawsze na początku - przed pierwszą rurką
        errorHandler: showError
    }))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
        browsers: ["> 5%"]
    })) //autoprefixy https://github.com/browserslist/browserslist#queries
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
});