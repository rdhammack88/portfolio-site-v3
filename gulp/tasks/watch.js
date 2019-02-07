/**
 * Required imports of dependency packages.
 */
var gulp = require('gulp'),
    php = require('gulp-connect-php'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');//.create();


// gulp.task('php', () => {
//     php.server({ base: './app', port: 3000, keepalive: true });
// });

/**
 * Watch Task
 * To trigger a change with browserSync.reload() method,
 * to reload the html page. 
 * 
 * Starts the "cssInject" task to
 * trigger any changes in the SASS files.
 * 
 * Starts the "scriptsRefresh" task to
 * trigger any changes in any JS files.
 * 
 * @param  {Task Name} 'watch'
 * @param  {callback function}
 */
gulp.task('watch', () => { //  ['php'],
    php.server({base: 'app'}, function() {
        // browserSync.init({
        //         open: true,
        //         notify: false,
        //         proxy: 'localhost:8080',
        //         baseDir: './app/',
        //         // server: {
        //         //     baseDir: 'app'
        //         // }
        //     });

        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    // watch('./app/index.html', () => {
    //     browserSync.reload();
    // });

    watch("./app/**/*.php").on('change', () => {
		browserSync.reload();
    });
    
    watch("./app/**/*.html").on('change', () => {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.scss', () => {
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', () => {
        gulp.start('scriptsRefresh');
    });

    // watch('.app/assets/views/**/*.php', () => {
    //     gulp.start('php');
    // });
});

// gulp.task('dev', ['watch'], () => {
//     gulp.watch('./**/*.php', browserSync.reload);
// });

/**
 * gulp -> cssInject task.
 * Using the styles task as a dependecy
 * Start the browserSync.stream() method
 * to watch for changes in the SASS files 
 * and inject them into the HTML.
 * Being watched under the gulp -> watch task.
 *
 * @param  {Task Name} 'cssInject'
 * @param  {Array Dependency} ['styles']
 * @param  {callback function}
 */
gulp.task('cssInject', ['styles'], () => {
    return gulp
            .src('./app/temp/styles/styles.min.css')
            .pipe(browserSync.stream());
});

/**
 * gulp -> cssInject task.
 * Using the styles task as a dependecy,
 * Start the browserSync.stream() method
 * to watch for changes in the SASS files
 * and inject them into the HTML.
 * Being watched under the gulp -> watch task.
 *
 * @param  {Task Name} 'scriptsRefresh'
 * @param  {Array Dependency} ['scripts']
 * @param  {callback function}
 */
gulp.task('scriptsRefresh', ['scripts'], () => {
    browserSync.reload();
});