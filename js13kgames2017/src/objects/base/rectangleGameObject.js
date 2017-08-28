/**
 * Rectangle object of the game.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis. 
 * @param {Number} width Object's width.
 * @param {Number} height Object's height.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function RectangleGameObject(id, x, y, vx, vy, width, height, isUpdated, isRendered) {
	GameObject.call(this, id, x, y, vx, vy, isUpdated, isRendered);

	this.width = width;
	this.height = height;
	this.shape = ShapeTypes.RECTANGLE;
}

RectangleGameObject.prototype = Object.create(GameObject.prototype);
RectangleGameObject.prototype.constructor = RectangleGameObject;

/**
 * Check, whether the object collide with provided object.
 * @param {GameObject} gameObject Instanceo of the game object.
 * @returns {Boolean} true if collision occurs or false otherwise.
 */
RectangleGameObject.prototype.isCollide = function (gameObject) {
	if (gameObject.shape === ShapeTypes.POINT || gameObject.shape === ShapeTypes.CIRCLE) {
		return Math2D.isRectangleCircleIntersect(this.center, this.width, this.height, gameObject.center, gameObject.radius);
	}

	if (gameObject.shape === ShapeTypes.RECTANGLE) {
		return Math2D.isRectangleRectangleIntersect(this.center, this.width, this.height, gameObject.center, gameObject.width, gameObject.height);
	}

	throw new UndefinedCollisionTypeError(gameObject);
}