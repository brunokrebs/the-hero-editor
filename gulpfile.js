var gulp = require('gulp');
var ts = require('gulp-typescript');
var webserver = require('gulp-webserver');

gulp.task('transpile-ts', function () {
	return gulp.src('src/**/*.ts')
		.pipe(ts({
			target: 'ES5',
			module: 'system',
			moduleResolution: 'node',
			sourceMap: true,
			emitDecoratorMetadata: true,
			experimentalDecorators: true,
			removeComments: false,
			noImplicitAny: false
		}))
		.pipe(gulp.dest('development'));
});

gulp.task('develop', ['transpile-ts'], function () {
	gulp.watch(['src/**/*.ts'], ['transpile-ts']);
	gulp.src('development').pipe(webserver());
});