var gulp      = require('gulp'),
postcss       = require('gulp-postcss'),
autoprefixer  = require('autoprefixer'),
cssvars       = require('postcss-simple-vars'),
nested        = require('postcss-nested'),
cssImport     = require('postcss-import'),
mixins        = require('postcss-mixins');

// run before css inject due to cssInject ["styles dependency"]
gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/main.css')
    .pipe(postcss([cssImport,mixins,cssvars, nested, autoprefixer]))
    //when style error occur gulp don't stop.
    .on('error',function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
