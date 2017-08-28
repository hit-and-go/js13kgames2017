/// <binding ProjectOpened='watch, watch-tilemap, watch-assets' />
const gulp = require('gulp');
const concat = require('gulp-concat');
const path = require('path');

require('events').EventEmitter.prototype._maxListeners = 10;

const config = {
	projectDir: __dirname,

	srcDir: path.join(__dirname, 'src'),
	buildDir: path.join(__dirname, 'build'),
	bundleDir: '',

	systemjsDebugConf: 'systemjs.debug.conf.js',
	systemjsDistConf: 'systemjs.dist.conf.js',

	proxyUrl: 'http://localhost:49827/',

	assetsDir: path.join(__dirname, 'assets')
}

gulp.task('clean', require('./tasks/clean')(gulp, config));

gulp.task('compile', ['clean'], require('./tasks/compile')(gulp, config.srcDir, config.buildDir));

gulp.task('watch', require('./tasks/watch')(gulp, config.srcDir));

gulp.task('browser-sync', require('./tasks/browser-sync')(gulp, config.srcDir, config.proxyUrl));

gulp.task('build-debug', ['compile'], require('./tasks/build-debug')(gulp, config));

gulp.task('build-dist', ['compile'], require('./tasks/build-dist')(gulp, config));

gulp.task('pack-tilemap', require('./tasks/pack-tilemap')(gulp, config));

gulp.task('watch-tilemap', require('./tasks/watch-tilemap')(gulp, config.assetsDir));

gulp.task('pack-assets', require('./tasks/pack-assets')(gulp, config));

gulp.task('watch-assets', require('./tasks/watch-assets')(gulp, config));
