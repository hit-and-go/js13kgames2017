/**
 * Base object with unique index and its center.
 * @param {Number} id Unique identifier of the object.
 * @param {Number} x Horizontal dimensional position of the center.
 * @param {Number} y Vertical dimensional position of the center.
 */
function BaseObject(id, x, y) {
	this.id = id;
	this.center = new Vector2D(x, y);
}

/**
 * Create vector from center of the object to provided point.
 * @param {Vector2D} point Destination point for calculation.
 * @returns {Vector2D} Resulted vector.
 */
BaseObject.prototype.vectorTo = function (point) {
	return new Vector2D(point.x - this.center.x, point.y - this.center.y);
}

/**
 * Calculate distance beetween object's center and provided point.
 * @param {Vector2D} point Point for calculation.
 * @returns {Number} Distance.
 */
BaseObject.prototype.distance = function (point) {
	return Math2D.distance(this.center, point)
}