/**
 * Common functionality.
 */
function Utils() {
}

/**
 * Get random number between provided minimum and maximum.
 * @param {Number} min Minimum number.
 * @param {Number} max Maximum number.
 * @returns {Number} Generated number. 
 */
Utils.random = function (min, max) {
	return Math.random() * (max - min) + min;
}

/**
 * 
 * @returns {DateTime} 
 */
Utils.prototype.time = function () {
	return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}