/**
 * Required imports of dependency packages.
 */
var gulp = require('gulp'),
    del = require('del'),
    prefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

/**
 * Configure SASS compiler to run "node-sass" compilation
 */
sass.compiler = require('node-sass');

/**
 * Task to clean up and remove styles 
 * file before piping new styles file
 * to temp directory.
 *
 * @param  {Task Name} 'deleteStyles'
 * @param  {Array Dependency} []
 * @param  {callback function}
 */
gulp.task('deleteStyles', () => {
    return del('./app/temp/styles/*.css');
});

/**
 * Task to run "styles" task
 * No dependencies
 * Output style === compressed
 * Prefix declarations for last 10 browser versions
 *
 * @param  {Task Name} 'styles'
 * @param  {callback function}
 */
gulp.task('styles',  () => {
    return gulp
            .src('./app/assets/styles/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                // outputStyle: 'expanded'
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(prefixer({
                browsers: ['last 10 versions']
            }))
            .pipe(sourcemaps.write())
            .pipe(rename('styles.css'))
            .pipe(gulp.dest('./app/temp/styles'))
            ;
});    