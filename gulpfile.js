var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importCss = require('postcss-import');


gulp.task('default', function () {
    console.log("Hooray - you creayed a gulp task.");
});

gulp.task("html", function () {
    console.log("You did great Hmd!");
});








gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('./app/assets/styles/**/*.css', function () {
        gulp.src('./app/assets/styles/**/*.css')
            .pipe(postcss([importCss, cssvars, nested, autoprefixer]))
            .pipe(gulp.dest('./app/temp/styles'));
    });
});





//gulp.task('styles', () => {
//    const postcss = require('gulp-postcss')
//    const sourcemaps = require('gulp-sourcemaps')
//
//    return gulp.src('./app/assets/**/*.css')
//        .pipe(sourcemaps.init())
//        .pipe(postcss([require('precss'), require('autoprefixer')]))
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest('./app/temp/styles'))
//})