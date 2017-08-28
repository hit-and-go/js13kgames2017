module.exports = (gulp, config) =>() => {
	const del = require('del');
	const path = require('path');
	const packageJson = require(path.join(config.projectDir, 'package.json'));

	let appName = packageJson.name;

	return del([
		path.join(config.projectDir, `${appName}.min.js`),
		path.join(config.projectDir, `${appName}.min.js.map`),

		path.join(config.buildDir, '**', '*.js'),
		'!' + path.join(config.buildDir, '*config.js'),
		path.join(config.buildDir, '**', '*.js.map'),

		path.join(config.srcDir, '**', '*.js'),
		'!' + path.join(config.srcDir, '*config.js'),
		path.join(config.srcDir, '**', '*.js.map')
	]);
}