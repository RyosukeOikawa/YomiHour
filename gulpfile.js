var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {browsers: ['last 3 version', 'ie >= 6', 'Android 4.0']};

//browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("./*.html", ['bs-reload']);
    gulp.watch("./css/*.css", ['bs-reload']);
    gulp.watch("./js/*.css", ['bs-reload']);
});

// minify-css
gulp.task('minify-css', function() {
    gulp.src("css/*.css")
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'));
    gulp.src("*.html")
        .pipe(gulp.dest('dist/'));
});

// minify-js
gulp.task('minify-js', function() {
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});
