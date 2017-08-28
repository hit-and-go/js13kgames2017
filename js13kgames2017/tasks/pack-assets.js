module.exports = (gulp, config) =>() => {
	const path = require('path');
	const gft = require('gulp-file-tree');

	return gulp.src([
			path.join(config.assetsDir, 'levels', '*.json')
			//'!' + path.join(config.assetsDir, '*.json')
	])
		.pipe(gft())
		.pipe(gulp.dest(path.join(config.assetsDir)));;
}