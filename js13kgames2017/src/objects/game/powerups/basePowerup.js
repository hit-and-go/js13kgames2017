/**
 * Base powerup object.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Number} width Object's width.
 * @param {Number} height Object's height.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 * @param {ObjectType} type Type of the object.
 * @param {Sprite} sprite Sprite of the object.
 */
function BasePowerup(id, x, y, vx, vy, width, height, isUpdated, isRendered, type, sprite) {
	RectangleGameObject.call(this, id, x, y, vx, vy, width, heigth, isUpdated, isRendered);

	this.type = type;
	this.sprite = sprite;
}

BasePowerup.prototype = Object.create(RectangleGameObject.prototype);
BasePowerup.prototype.constructor = BasePowerup;

/**
 * Update powerup object through game loop.
 */
BasePowerup.prototype.update = function () {
	if (this.isUpdated) {
		//process collisions
		var gameObjectsIds = Grid.getCollisions(this, [ObjectTypes.PLAYER]);
		if (gameObjectsIds != null && gameObjectsIds.length > 0) {
			for (var i = 0; i < gameObjectsIds.length; i++) {
				//collision with player
				if (Pool[gameObjectsIds[i]].type === ObjectTypes.PLAYER) Pool[gameObjectsIds[i]].pickupPowerup(this);
			}
		}

		//update properties
		this.center.x += this.velocity.x;
		this.center.y += this.velocity.y;

		//update states
		if (!this.isUpdated) this.isRendered = false;
	}
}

/**
 * Render powerup object through game loop.
 */
BasePowerup.prototype.render = function () {
	if (this.isRendered) {
		//TODO
		//Sprites
		//Game.CFG.drawImage(Sprites)
	}
}
