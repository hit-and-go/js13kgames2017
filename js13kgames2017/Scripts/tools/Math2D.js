/**
 * Basic two dimensional functions and constants.
 */
function Math2D() {
}

/**
 * Two dimenstional vector.
 * @param {Number} x Horizontal axis coordinate. 
 * @param {Number} y Vertical axis coordinate.
 * @return {Number} New instance of Vector2D.
 */
function Vector2D(x, y) {
	this.x = x;
	this.y = y;
}

/**
 * Calculate signum of provided number.
 * @param {Number} number Processing number.
 * @returns {Number} 1,0 or -1. 
 */
Math2D.sign = function (number) {
	if (number > 0) return 1;
	if (number == 0) return 0;
	if (number < 0) return -1
}

/**
 * Calculate distance between two points.
 * @param {Vector2D} point1 First point.
 * @param {Vector2D} point2 Second point.
 * @returns {Number} Distance.
 */
Math2D.distance = function (point1, point2) {
	return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
}

/**
 * Check if two circles intersect.
 * @param {Vector2D} center1 Center of the first circle.
 * @param {Number} r1 Radius of the first circle.
 * @param {Vector2D} center2 Center of the second circle.
 * @param {Number} r2 Radius of the second circle.
 * @returns {Boolean} true if circles intersect or false otherwise.
 */
Math2D.isCircleCircleInterseсt = function (center1, r1, center2, r2) {
	return Math2D.distance(center1, center2) < r1 + r2;
}

/**
 * Check if rectangle and circle intersect.
 * @param {Vector2D} center1 Center of the rectangle.
 * @param {Number} w1 Width of the rectangle.
 * @param {Number} h1 Height of the rectangle.
 * @param {Vector2D} center2 Center of the circle.
 * @param {Number} r2 Radius of the circle.
 * @returns {Boolean} true if rectangle and circle intersect or false otherwise.
 */
Math2D.isRectangleCircleIntersect = function (center1, w1, h1, center2, r2) {
	var distX = Math.abs(center2.x - center1.x);
	var distY = Math.abs(center2.y - center1.y);

	if (distX > (w1 / 2 + r2)) return false;
	if (distY > (h1 / 2 + r2)) return false;

	if (distX <= w1 / 2) return true;
	if (distY <= h1 / 2) return true;

	var dx = distX - w1 / 2;
	var dy = distY - h1 / 2;

	return Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(r2, 2);
}

/**
 * Check if two rectangles intersect.
 * @param {Vector2D} center1 Center of the first rectangle.
 * @param {Number} w1 Width of the first rectangle.
 * @param {Number} h1 Height of the first rectangle.
 * @param {Vector2D} center2 Center of the second rectangle.
 * @param {Number} w2 Width of the second rectangle.
 * @param {Number} h2 Height of the second rectangle.
 * @returns {Boolean} tru if rectangles intersect or false otherwise.
 */
Math2D.isRectangleRectangleIntersect = function (center1, w1, h1, center2, w2, h2) { //TODO
	return 2 * center1.x - w1 < 2 * center2.x + w2 &&
           2 * center1.x + w1 > 2 * center2.x - w2 &&
           2 * center1.y - h1 < 2 * center2.y + h2 &&
           2 * center1.y + h1 > 2 * center2.y - h2;
}