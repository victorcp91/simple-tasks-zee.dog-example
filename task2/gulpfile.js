var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');	
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');


gulp.task('style',function(){
	gulp.src('scss/main.scss')
	.pipe(plumber({
		handleError: function(error){
			console.log(error);
		}
	}))
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: [
		 'last 2 versions',
		 'safari 5',
		 'ie 8',
		 'ie 9',
		 'opera 12.1',
		 'ios 6',
		 'android 4']
	}))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({stream:true}));
});



gulp.task('concatJs',function(){
	return gulp.src('js/controllers/*.js')
	.pipe(plumber({
		handleError: function(error){
			console.log(error);
		}
	}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('js'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('serve',function(){
	browserSync.init({
		server: {
			baseDir:''	
		}
	});

	gulp.watch('js/controllers/*.js',['concatJs']);
	gulp.watch('scss/**/*.scss',['style']);
	gulp.watch('**/*.html').on('change',browserSync.reload);

});


gulp.task('default',['serve']);