var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {

    browserSync({
        server: {
            basedir: '/'
        }
    });

    gulp.watch(['*.js'], reload);


});