/**
 * Required imports of dependency packages.
 */
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'), //.create(),

    php = require('gulp-connect-php');
/**
 * Task to preview the dist directory for tests
 * 
 * @param  {Task Name} 'preview'
 * @param  {Array Dependency} []
 * @param  {callback function}
 */
gulp.task('preview', [], () => {
    // return browserSync.init({
    //     notify: false,
    //     server: {
    //         baseDir: 'dist'
    //     }
    // });
    return php.server({base: 'dist'}, function() {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });
});

/**
 * Task to clean up and remove dist folder
 * before piping new files to dist
 *
 * @param  {Task Name} 'deleteDist'
 * @param  {Array Dependency} ['icons']
 * @param  {callback function}
 */
gulp.task('deleteDist', ['icons'], () => {
    return del('./dist');
});

/**
 * Task to copy any and all other project files
 *
 * @param  {Task Name} 'preview'
 * @param  {Array Dependency} ['deleteDist']
 * @param  {callback} function
 */
gulp.task('copyGeneral', ['deleteDist'], () => {
    var pathsToCopy = [
        './app/**/*',
        './app/index.php',
        // '!./app/index.php',
        // '!./app/assets/views/**',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];

    return gulp
            .src(pathsToCopy)
            .pipe(gulp.dest('./dist'));
});

/**
 * Task to compress all images
 * and copy to dist directory
 *
 * @param  {Task Name} 'preview'
 * @param  {Array Dependency} ['deleteDist']
 * @param  {callback function}
 */
gulp.task("imageOptimize", ['deleteDist'], () => {
    return gulp
            .src([
                './app/assets/images/**/*',
                './app/assets/images/projects/*',
                '!./app/assets/images/icons',
                '!./app/assets/images/icons/**/*',
                '!./app/assets/images/favicons',
                '!./app/assets/images/favicons/**/*',
                // '!./app/assets/images/projects/**/*'
            ])
            .pipe(imagemin({
                progressive: true, // JPEG images
                interlaced: true, // GIF images
                multipass: true, // SVG images
                optimizationLevel: 7 // PNG files
            }, {verbose: true}))
            .pipe(gulp.dest('./dist/assets/images'));
});

/**
 * Task to start the 'usemin' task
 * after clean up of dist directory
 *
 * @param  {Task Name} 'preview'
 * @param  {Array Dependency} ['deleteDist']
 * @param  {callback function}
 */
gulp.task('useminStart', ['deleteDist'], () => {
    gulp.start('usemin');
    console.log('Finishing Usemin Task');
});

gulp.task('deleteExtra',['styles', 'scripts', 'usemin', 'useminStart'], () => {
    console.log('Deleting Extra HTML Files!');
    return del('./dist/*.html');
});

/**
 * Task to compress and move scripts, stylesheets and
 * index.php to dist directory
 * 
 *
 * @param  {Task Name} 'usemin'
 * @param  {Array Dependency} ['styles', 'scripts']
 * @param  {callback function}
 */
gulp.task('usemin', ['styles', 'scripts'], () => {
    console.log('Starting Usemin Task');
    return gulp
        // .src(['./app/index.php', './app/assets/views/*.html'])
        // .src(['./app/assets/views/header.html', './app/assets/views/footer.html'])
        .src('./app/assets/views/*.html')
        .pipe(usemin({
            // First perform revision on CSS file -- Adds caching hash to end of file
            // Then Compress CSS file
            css: [
                function () {
                    console.log('Revising CSS to Dist Directory');
                    return rev();
                },
                function () {
                    console.log('Minifying CSS to Dist Directory');
                    return cssnano();
                }
            ],
            // First perform revision of JS file -- Adds caching hash to end of file
            // Then Compress JS file
            js: [
                function () {
                    console.log('Revising JS to Dist Directory');
                    return rev();
                },
                function () {
                    console.log('Minifying JS to Dist Directory');
                    return uglify();
                }
            ]
        }))
        .on('error', function (errorInfo) {
            /** Continue watching for changes regardless of error, and log out the error */
            console.log(errorInfo); //.toString()
            this.emit('end');
        })
        .pipe(gulp.dest('./dist'));
});

/**
 * Task to run all build tasks
 * Clean dist folder
 * Copy generic files
 * Optimize images
 * Compress files
 *
 * @param  {Task Name} 'build'
 * @param  {Array Dependency} ['deleteDist', 'copyGeneral', 'imageOptimize', 'useminStart']
 */
gulp.task('build', ['deleteDist', 'copyGeneral', 'imageOptimize', 'useminStart', 'deleteExtra']);


