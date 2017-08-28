/**
 * Circle object of the game.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis. 
 * @param {Number} radius Object's radius.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function CircleGameObject(id, x, y, vx, vy, radius, isUpdated, isRendered) {
	GameObject.call(this, id, x, y, vx, vy, isUpdated, isRendered);

	this.radius = radius;
	this.shape = ShapeTypes.CIRCLE;
}

CircleGameObject.prototype = Object.create(GameObject.prototype);
CircleGameObject.prototype.constructor = CircleGameObject;

/**
 * Check, whether the object collide with provided object.
 * @param {GameObject} gameObject Instanceo of the game object.
 * @returns {Boolean} true if collision occurs or false otherwise.
 */
CircleGameObject.prototype.isCollide = function (gameObject) {
	if (gameObject.shape === ShapeTypes.POINT || gameObject.shape === ShapeTypes.CIRCLE) {
		return Math2D.isCircleCircleInterseсt(this.center, this.radius, gameObject.center, gameObject.radius);
	}

	if (gameObject.shape === ShapeTypes.RECTANGLE) {
		return Math2D.isRectangleCircleIntersect(gameObject.center, gameObject.width, gameObject.height, this.center, this.radius);
	}

	throw new UndefinedCollisionTypeError(gameObject);
}