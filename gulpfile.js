var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps'); - Uncomment when developing

sass.compiler = require('node-sass');

// Rebuild css from Sass
gulp.task('sass', function () {
  return gulp.src('ckanext/ed/fanstatic/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('ckanext/ed/fanstatic/css'));
});

// Rebuild CSS from LESS
gulp.task('less', function () {
  return gulp.src('ckanext/ed/fanstatic/less/custom.less')
  // .pipe(sourcemaps.init()) - Uncomment when developing
  .pipe(less())
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(autoprefixer({
    browsers: [
      "last 5 versions",
      "ie >= 11"
    ]
  }))
  // .pipe(sourcemaps.write()) - Uncomment when developing
  .pipe(gulp.dest('ckanext/ed/fanstatic/css'));
});

// Watch for LESS file changes
gulp.task('watch', function () {
  gulp.watch(['ckanext/ed/fanstatic/less/**/*.less'], gulp.parallel('less'));
  gulp.watch(['ckanext/ed/fanstatic/sass/**/*.scss'], gulp.parallel('sass'));
});


// The default Gulp.js task
gulp.task('default', gulp.parallel('less', 'watch'));
