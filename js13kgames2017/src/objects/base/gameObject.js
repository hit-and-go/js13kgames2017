/**
 * Base object of the game.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis. 
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function GameObject(id, x, y, vx, vy, isUpdated, isRendered) {
	BaseObject.call(this, id, x, y);

	this.velocity = new Vector2D(vx, vy);

	this.type = null;
	this.shape = null;

	this.isUpdated = isUpdated;
	this.isRendered = isRendered;
}

GameObject.prototype = Object.create(BaseObject.prototype);
GameObject.prototype.constructor = GameObject;

/**
 * Update object through game loop.
 */
GameObject.prototype.update = function () {
	throw new NotImplementedError(this);
}

/**
 * Render object through game loop.
 */
GameObject.prototype.render = function () {
	throw new NotImplementedError(this);
}

/**
 * Check, whether the object collide with provided object.
 * @param {GameObject} gameObject Instance of the game object.
 * @returns {Boolean} true if collision occurs or false otherwise.
 */
GameObject.prototype.isCollide = function (gameObject) {
	throw new UndefinedCollisionTypeError(gameObject);
}