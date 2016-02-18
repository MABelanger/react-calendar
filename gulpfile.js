
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms react JSX to JS
var source = require('vinyl-source-stream');// Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		json: './src/api/**/*.json',
		js: './src/**/*.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'./src/**/*.css',
		],
		scss: './src/**/*.scss',
		src: './src',
		dist: './dist',
		mainJs: './src/main.js'

	}
};
//Start a local developent server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')	
		.pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)	
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('json', function() {
	gulp.src(config.paths.json)	
		.pipe(gulp.dest(config.paths.dist + '/api'))
		.pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src(config.paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('sass.css'))
    .pipe(gulp.dest(config.paths.src + '/css'));
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
return gulp.src(config.paths.js)
	.pipe(lint({config: 'eslint.config.json'}))
	.pipe(lint.format());
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.scss, ['sass']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	
});

gulp.task('default', ['html', 'json', 'js', 'sass', 'css', 'lint', 'open', 'watch']);
