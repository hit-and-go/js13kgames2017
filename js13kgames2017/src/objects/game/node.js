/**
 * Spider's spying node.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis. 
 * @param {Number} radius Object's radius.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 * @param {Number} power Damage power of the node.
 * @param {Number} health Health of the node.
 * @param {Number} scanRadius Scanning radius of the node.
 * @param {Number} traceRadius Tracing radius of the node.
 * @param {Number} alpha Alpha channel.
 */
function Node(id, x, y, vx, vy, radius, isUpdated, isRendered, power, health, scanRadius, traceRadius, alpha) {
	CircleGameObject.call(this, id, x, y, vx, vy, radius, isUpdated, isRendered);

	this.type = ObjectTypes.NODE;
	this.sprite = null;//TODO

	this.power = power;
	this.health = health;
	this.scanRadius = scanRadius;
	this.traceRadius = traceRadius;
	this.alpha = alpha;

	if (alpha <= 0) {
		this.isRendered = false;
	}
	else {
		this.isRendered = true;
	}
}

Node.prototype = Object.create(CircleGameObject.prototype);
Node.prototype.constructor = Node;

/**
 * Update node through the game loop.
 */
Node.prototype.update = function () {
	//health check
	if (this.isUpdated && this.health <= 0) this.isUpdated = false;

	if (this.isUpdated) {
		//process collisions
		var gameObjectIds = Grid.getCollisions(this, [ObjectTypes.PLAYER, ObjectTypes.BRICK, ObjectTypes.NODE]);
		if (gameObjectIds != null && gameObjectIds.length > 0) {
			for (var i = 0; i < gameObjectIds.length; i++) {
				//collision with player
				if (Pool[gameObjectIds[i]].type === ObjectTypes.PLAYER) this.damage(Pool[gameObjectIds[i]]);
				//collision with brick
				if (Pool[gameObjectIds[i]].type === ObjectTypes.BRICK) Pool[gameObjectIds[i]].reflect(this);
				//collision with node
				if (Pool[gameObjectIds[i].type === ObjectTypes.NODE]) {
					//TODO impulse save and reverse velocities
				}
			}
		}


	}

	//if (this.isUpdated) {
	//	//scanning
	//	var scannedGameObjectIds = Grid.getCollisions(this, [ObjectTypes.PLAYER], { "radius": this.scanRadius });
	//	if (scannedGameObjectIds != null && scannedGameObjectIds.length > 0) {
	//		for (var i = 0; i < scannedGameObjectIds.length; i++) {
	//			if (Pool[scannedGameObjectIds[i]].isVisible) {
	//				//trace player
	//				this.trace(Pool[scannedGameObjectIds[i]]);
	//			}
	//		}
	//	}

	//	//tracing
	//	var tracedGameObjectIds = Grid.getCollisions(this, [ObjectTypes.PLAYER], { "radius": this.traceRadius });
	//	if (tracedGameObjectIds != null && tracedGameObjectIds.length > 0) {
	//		for (var i = 0; i < tracedGameObjectIds.length; i++) {
	//			if (Pool[tracedGameObjectIds[i]].isVisible) {
	//				//trace player
	//				this.trace(Pool[tracedGameObjectIds[i]]);
	//			}
	//		}
	//	}
	//}

	//update states
	if (!this.isUpdated) this.isRendered = false;
}

/**
 * Render node through the game loop.
 */
Node.prototype.render = function () {
	if (this.isRendered) {
		if(this.power<=GameConstants.NODE_LOW_POWER_LIMIT)
		if(this.power>GameConstants.NODE_MAX_LIMIT)
	}
}

Node.prototype.damage = function (gameObjectWithHealth) {
	gameObjectWithHealth.health -= power;
	this.isUpdated = false;
}

Node.prototype.hide = function () {
	this.isRedndered = false;
}

Node.prototype.show = function () {
	this.isRendered = true;
}

Node.prototype.trace = function () {

}

Node.prototype.glitch = function () {
	//TODO
}

Node.prototype.recycle = function (x, y, vx, vy, power, health, scanRadius, traceRadius, alpha) {
	this.center.x = x;
	this.center.y = y;
	this.velocity.vx = vx;
	this.velocity.vy = vy;
	this.power = power;
	this.health = health;

}
