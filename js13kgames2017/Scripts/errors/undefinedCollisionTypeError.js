/**
 * Exception occurs, when collision logic was not registered for the object.
 * @param {Object} object Unregistered object.
 */
function UndefinedCollisionTypeError(object) {
	Error.call(this, (object.toString() || ""));

	this.name = "UndefinedCollisionTypeError";
}

UndefinedCollisionTypeError.prototype = Object.create(Error.prototype);
UndefinedCollisionTypeError.prototype.constructor = UndefinedCollisionTypeError;