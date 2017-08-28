module.exports = (gulp, config) =>() => {
	const htmlreplace = require('gulp-html-replace');
	const lec = require('gulp-line-ending-corrector');

	return gulp.src('index.html')
		.pipe(htmlreplace({
			'js': [
				'node_modules/es6-promise/dist/es6-promise.auto.js',
				'node_modules/systemjs/dist/system.js',
				config.systemjsDebugConf
			]
		},
			{
				keepBlockTags: true
			}))
		.pipe(lec({ verbose: false, eolc: 'LF', encoding: 'utf8' }))
		.pipe(gulp.dest(config.bundleDir));
}