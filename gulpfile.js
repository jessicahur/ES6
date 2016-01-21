const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const jshint = require('gulp-jshint');
const gutil = require('gulp-util');

require('babel-core/register');

gulp.task('test', function () {
  return gulp.src( 'test/*.js', { read: false } )
    .pipe(mocha({
      reporter: 'nyan',
      compilers: [
        'js:babel-core/register',
      ]
    }));
});

gulp.task('lint', function() {
  return gulp.src(['*.js', 'test/*.js'], {read: false})
              .pipe(jshint('.jshintrc'))
              .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', function () {
  return gulp.src('src/**.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('testing', ['build', 'lint', 'test']);
