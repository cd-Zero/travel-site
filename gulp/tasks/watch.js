
var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    browserSync   = require('browser-sync').create()



gulp.task('watch', function(){
// setting up browserSync

browserSync.init({
  // notify:false,
  server:{
    baseDir:"app"
  }
});


//watch index.html changes
  watch('./app/index.html',function(){
    // dummy task
    // gulp.start('html');
    browserSync.reload();

  });
// watch all css files
  watch('./app/assets/styles/**/*.css', function(){

    gulp.start('cssInject');

  });
});


gulp.task('cssInject',["styles"], function(){
  return gulp.src('./app/temp/styles/main.css')
  .pipe(browserSync.stream());
});
