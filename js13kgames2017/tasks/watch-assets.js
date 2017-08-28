module.exports = (gulp, config) =>() => {
	const path = require('path');
	const watch = require('gulp-watch');

	return watch([
		path.join(config.assetsDir, '**', '*.*'),
			'!' + path.join(config.assetsDir, '*.json')
	],
			{
				ignoreInitial: false
			}, () =>gulp.start('pack-assets'));
}
