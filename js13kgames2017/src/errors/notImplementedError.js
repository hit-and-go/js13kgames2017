/**
 * Exception occurs, when logic was not implemented.
 * @param {Object} object Object that did not implement required logic.
 */
function NotImplementedError(object) {
	Error.call(this, (object.toString() || ""));

	this.name = "NotImplementedError";
}

NotImplementedError.prototype = Object.create(Error.prototype);
NotImplementedError.prototype.constructor = NotImplementedError;