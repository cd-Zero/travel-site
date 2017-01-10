// Modinizr tests browser so developer can get data to tailor user xp
// so older browsers can be supported.
// this code pipes css and script files through modernizr

var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
