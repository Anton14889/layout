const gulp = require('gulp'),
	{ task } = require('gulp'),
	{ src } = require('gulp'),
	{ watch } = require('gulp'),
	{ parallel } = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	del = require('del'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify');


task('clean', cb => {
	del.sync('dist');
	cb()
})
task('clear', cb => {
	cache.clearAll();
	cb()
})



task('sass', cb => {
	src('app/sass/main.sass')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ stream: true }))
	cb()
})

task('css-libs', cb => {
	src('app/css/*.css')
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('app/css'));
	cb()
})

task('prod', cb => {
	src('app/css/*.css')
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/css'));

	src('app/css/fonts.css')
		.pipe(gulp.dest('dist/css'));

	src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	src('app/*.html')
		.pipe(gulp.dest('dist'));

	src(['app/js/*.js', 'app/js/*.mjs'])
		.pipe(minify({
			noSource: true
		}))
		.pipe(gulp.dest('dist/js'));

	src('app/img/**/*')
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [
				{
					removeViewBox: true
				}
			]
		}))
		.pipe(gulp.dest('dist/img'));

	src('app/libs/**/*')
		.pipe(gulp.dest('dist/libs'));

	cb()
})


task('browser', _ => {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
})

task('watch', _ => {
	watch('app/sass/*.sass', gulp.series('sass'));
	watch("app/*.html").on('change', browserSync.reload);
	watch("app/js/*.js").on('change', browserSync.reload);
})

task('default', parallel('watch', 'browser'));
