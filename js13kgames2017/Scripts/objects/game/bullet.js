/**
 * Bullet from the player's gun.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 * @param {Number} power Damage power of the bullet.
 */
function Bullet(id, x, y, vx, vy, isUpdated, isRendered, power) {
	PointGameObject.call(this, id, x, y, vx, vy, isUpdated, isRendered);

	this.type = ObjectTypes.BULLET;
	this.sprite = null;//TODO

	this.power = power;
}

Bullet.prototype = Object.create(PointGameObject.prototype);
Bullet.prototype.constructor = Bullet;

/**
 * Update bullet through the game loop.
 */
Bullet.prototype.update = function () {
	if (this.isUpdated) {
		//process collisions
		var gameObjectIds = Grid.getCollisions(this, [ObjectTypes.SPIDER, ObjectTypes.NODE, ObjectTypes.BRICK]);
		if (gameObjectIds != null && gameObjectIds.length > 0) {
			for (var i = 0; i < gameObjectIds.length; i++) {
				//collision with spider or node
				if (Pool[gameObjectIds[i]].type === ObjectTypes.SPIDER || Pool[gameObjectIds[i]].type === ObjectTypes.NODE) this.damage(Pool[gameObjectIds[i]]);
				//collision with brick
				if (Pool[gameObjectIds[i]].type === ObjectTypes.BRICK) Pool[gameObjectIds[i]].reflect(this);
			}
		}

		//update properties
		this.center.x += this.velocity.x;
		this.center.y += this.velocity.y;
	}

	//update states
	if (!this.isUpdated) this.isRendered = false;
}

/**
 * Render bullet through the game loop.
 */
Bullet.prototype.render = function () {
	if (this.isRendered) {
		if (this.power < GameConstants.BULLET_LOW_POWER_LIMIT) $.foreground.drawImage(SpritePool.bulletLowPower, this.center.x - GameConstants.BULLET_SIZE, this.center.y - GameConstants.BULLET_SIZE);
		if (this.power >= GameConstants.BULLET_LOW_POWER_LIMIT && this.power < GameConstants.BULLET_MIDDLE_POWER_LIMIT) $.foreground.drawImage(SpritePool.bulletMiddlePower, this.center.x - GameConstants.BULLET_SIZE, this.center.y - GameConstants.BULLET_SIZE);
		if (this.power >= GameConstants.BULLET_MIDDLE_POWER_LIMIT) $.foreground.drawImage(SpritePool.bulletHighPower, this.center.x - GameConstants.BULLET_SIZE, this.center.y - GameConstants.BULLET_SIZE);
	}
}

/**
 * Do damage to the game object which has health property.
 */
Bullet.prototype.damage = function (gameObjectWithHealth) {
	gameObjectWithHealth.health -= power;
	this.isUpdated = false;
}

/**
 * Refresh bullet's properties for recycling.
 */
Bullet.prototype.recycle = function (x, y, vx, vy) {
	this.center.x = x;
	this.center.y = y;
	this.velocity.x = vx;
	this.velocity.y = vy;
	this.isUpdated = true;
	this.isRendered = true;
}