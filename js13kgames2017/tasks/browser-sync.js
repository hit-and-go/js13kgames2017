module.exports = (gulp, sourceDir, proxyUrl) =>() => {
	const path = require('path');
	const watch = require('gulp-watch');
	const browserSync = require('browser-sync');

	browserSync.init({
		proxy: proxyUrl
	});

	return watch(path.join(sourceDir, '**', '*.ts'),
			{
				ignoreInitial: false
			}, () =>gulp.start('compile'));
}
