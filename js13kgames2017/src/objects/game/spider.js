/**
 * Spider, main enemy.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 * @param {Number} health Health of the spider.
 * @param {Number} frequency Frequency of creating new nodes.
 * @param {Number} power Damage power of the spider.
 */
function Spider(id, x, y, vx, vy, isUpdated, isRendered, health, frequency,power) {
	CircleGameObject.call(this, id, x, y, vx, vy, radius, isUpdated, isRendered);

	this.type = ObjectTypes.SPIDER;
	this.sprite = null;//TODO

	this.health = health;
	this.frequency = frequency;
	this.power=power;
}

Spider.prototype = Object.create(CircleGameObject.prototype);
Spider.prototype.constructor = Spider;

/**
 * Update spider through the game loop.
 */
Spider.prototype.update = function () {
	if (this.isUpdated) {
		//process collisions
		var gameObjectIds = Grid.getCollisions(this, [ObjectTypes.PLAYER, ObjectTypes.BRICK]);
		if (gameObjectIds != null && gameObjectIds.length > 0) {
			for (var i = 0; i < gameObjectIds.length; i++) {
				//collision with player
				if (Pool[gameObjectIds[i]].type === ObjectTypes.PLAYER) this.damage(Pool[gameObjectIds[i]]);
				//collision with brick
				if (Pool[gameObjectIds[i]].type === ObjectTypes.BRICK) Pool[gameObjectIds[i]].reflect(this);
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
 * Render spider through the game loop.
 */
Spider.prototype.render = function () {
	if (this.isRendered) {
		//TODO
	}
}

/**
 * Damage the game object.
 */
Spider.prototype.damage = function (gameObjectWithHealth) {
	gameObjectWithHealth.health -= this.power;
}

/**
 * Throw new node.
 */
Spider.prototype.throwNode = function () {
	//TODO
}

/**
 * Glitch spider's properties.
 */
Spider.prototype.glitch = function () {
	//TODO
}