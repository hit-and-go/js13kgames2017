module.exports = (gulp, sourceDir) =>() => {
	const path = require('path');
	const watch = require('gulp-watch');

	return watch(path.join(sourceDir, '**', '*.ts'),
			{
				ignoreInitial: false
			}, () =>gulp.start('compile'));
}
