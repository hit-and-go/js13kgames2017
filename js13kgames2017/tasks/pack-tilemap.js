module.exports = (gulp, config) =>() => {
	const path = require('path');
	const tiledmapPack = require('gulp-phaser-tiled-pack');

	return gulp.src(path.join(config.assetsDir, 'levels', '*.json'))
		.pipe(tiledmapPack({ baseUrl: 'assets' }))
		.pipe(gulp.dest(path.join(config.assetsDir)));
}