var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('assets/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'localhost/concrete',
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever PHP or JS files change
  gulp.watch('*.php', browserSync.reload);
  gulp.watch('includes/*.php', browserSync.reload);
  gulp.watch('globals/*.php', browserSync.relaod);
  gulp.watch('assets/js/**/*.js', browserSync.reload);
});
