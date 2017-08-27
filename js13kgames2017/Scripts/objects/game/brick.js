/**
 * Brick, game static object.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Number} width Object's width.
 * @param {Number} height Object's height.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 * @param {Number} reflectionCoefficient Reflection coefficient of the brick.
 * @param {Number} reflectionAngle Reflection angle.
 */
function Brick(id, x, y, vx, vy, width, height, isUpdated, isRendered, reflectionCoefficient, reflectionAngle) {
	RectangleGameObject.call(this, id, x, y, vx, vy, isUpdated, isRendered);

	this.type = ObjectTypes.BRICK;
	this.sprite = null;//TODO

	this.reflectionCoefficient = reflection;
	this.reflectionAngle = reflectionAngle;
}

Brick.prototype = Object.create(RectangleGameObject.prototype);
Brick.prototype.constructor = Brick;

/**
 * Update brick through the game loop.
 */
Brick.prototype.update = function () {
	if (this.isUpdated) {
		//TODO
	}
}

/**
 * Render brick through the game loop.
 */
Brick.prototype.render = function () {
	if (this.isRendered) {
		//TODO
	}
}

/**
 * Reflect bullet from the brick.
 */
Brick.prototype.reflect = function (bullet) {
	//TODO
}

/**
 * Glitch brick's properties.
 */
Brick.prototype.glitch = function () {
	this.reflectionCoefficient = Utils.random(0, 1);
	this.reflectionAngle = Utils.random(0, 180);
}