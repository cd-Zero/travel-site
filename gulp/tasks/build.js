// this builds the site for distrobution!
//  in other words, this file creates the files you will load on to the web
//  docs folder for github pages in your projects
//   if you wantt o use distro please change refrences to docs on
//  ---this page by ctrl find docs and replacing what you find with distro or whatever you like!
//  gulp build will run the process

var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task("deleteDistFolder", ['icons'], function(){
  return del('./docs');
})

gulp.task('copyGeneralFiles',["deleteDistFolder"],function(){
var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!.app/asstes/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'

]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
})


gulp.task('optimizeImages',['deleteDistFolder',],function(){
    return gulp.src(['./app/assets/images/**/*',"!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
      .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      }))
      .pipe(gulp.dest("./docs/assets/images"))
})

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
    gulp.start('usemin')
});

gulp.task("usemin",['styles','scripts'], function(){
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css : [function(){return rev()},  function(){return cssnano()}],
    js  : [function(){return rev()},  function(){return uglify()}]
  }))
  .pipe(gulp.dest('./docs'));
})

gulp.task('build', ["deleteDistFolder","copyGeneralFiles","optimizeImages","useminTrigger"]);
