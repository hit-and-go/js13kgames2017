/**
 * Methods for playing sounds.
 */
function Audio() { }

/**
 * Play sound with jsfxr library.
 * @param {Object} params Collection of notes and intervals.
 */
Audio.playSound = function (params) {
	try {
		var soundURL = jsfxr(params);
		var player = new Audio();
		player.src = soundURL;
		player.play();
	} catch (e) {
		console.log(e);
	}
}