var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("styles/*.css").on("change", browserSync.reload);
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("app/templates/*.html").on("change", browserSync.reload);
    gulp.watch("app/*.js").on("change", browserSync.reload);
});
