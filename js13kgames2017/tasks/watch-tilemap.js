module.exports = (gulp, sourceDir) =>() => {
	const path = require('path');
	const watch = require('gulp-watch');

	return watch(path.join(sourceDir, 'levels', '*.json'),
			{
				ignoreInitial: false
			}, () =>gulp.start('pack-tilemap'));
}
