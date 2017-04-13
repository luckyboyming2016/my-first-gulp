var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
/*gulp.task('hello', function() {
  console.log('Hello World!');
});*/
gulp.task('sass', function(){
  return gulp.src('dev/scss/**/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('dev/css'))
    .pipe(browserSync.reload({
    	stream: true
    }));
});
gulp.task('browserSync',function(){
	browserSync({
		server:{
			baseDir : 'dev'
		}
	});
});
gulp.task('watch',['browserSync','sass'],function(){
	gulp.watch('dev/scss/**/*.scss',['sass']);
});