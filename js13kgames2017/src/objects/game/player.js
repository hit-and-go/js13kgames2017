/**
 * 
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis. 
 * @param {Number} radius Object's radius.
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 * @param {Number} health Player's health.
 * @param {type} ammo Player's ammo.
 */
function Player(id, x, y, vx, vy, radius, isUpdated, isRendered, health, ammo) {
	CircleGameObject.call(this, id, x, y, vx, vy, radius, isUpdated, isRendered);

	this.type = ObjectTypes.PLAYER;
	this.sprite = null;//TODO

	this.health = health;
	this.ammo = ammo;
	this.isVisible = true;
}

Player.prototype = Object.create(CircleGameObject.prototype);
Player.prototype.constructor = Player;

/**
 * Update player through the game loop.
 */
Player.prototype.update = function () {
	//health check
	if (this.isUpdated && this.health <= 0) this.isUpdated = false;

	if (this.isUpdated) {
		//	//process collisions
			var gameObjectIds = Grid.getCollisions(this, [ObjectTypes.BRICK]);
			if (gameObjectIds != null && gameObjectIds.length > 0) {
				for (var i = 0; i < gameObjectIds.length; i++) {
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
 * Render player through the game loop.
 */
Player.prototype.render = function () {
	if (this.isRendered) {
		if (this.velocity.x < 0 && this.velocity.y > 0) $.foreground.drawImage(SpritePool.playerLeftDown, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x < 0 && this.velocity.y == 0) $.foreground.drawImage(SpritePool.playerLeft, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x < 0 && this.velocity.y < 0) $.foreground.drawImage(SpritePool.playerLeftUp, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x == 0 && this.velocity.y < 0) $.foreground.drawImage(SpritePool.playerUp, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x > 0 && this.velocity.y < 0) $.foreground.drawImage(SpritePool.playerRightUp, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x > 0 && this.velocity.y == 0) $.foreground.drawImage(SpritePool.playerRight, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x > 0 && this.velocity.y > 0) $.foreground.drawImage(SpritePool.playerRightDown, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x == 0 && this.velocity.y > 0) $.foreground.drawImage(SpritePool.playerDown, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
		if (this.velocity.x == 0 && this.velocity.y == 0) $.foreground.drawImage(SpritePool.player, this.center.x - this.radius - GameConstants.PLAYER_MARGIN_FACTOR, this.center.y - this.radius - GameConstants.PLAYER_MARGIN_FACTOR);
	}
}

Player.prototype.moveLeft = function () {
	this.velocity.x -= GameConstants.PLAYER_MAX_SPEED;
}
Player.prototype.moveUp = function () {
	this.velocity.y -= GameConstants.PLAYER_MAX_SPEED;
}
Player.prototype.moveRight = function () {
	this.velocity.x += GameConstants.PLAYER_MAX_SPEED;
}
Player.prototype.moveDown = function () {
	this.velocity.y += GameConstants.PLAYER_MAX_SPEED;
}
Player.prototype.stopY = function () {
	this.velocity.y = 0;
}
Player.prototype.stopX = function () {
	this.velocity.x = 0;
}

/**
 * Hide player from the nodes.
 */
Player.prototype.hide = function (duration) {
	var self = this;
	this.isVisible = false;
	setTimeout(function () { self.isVisible = true; }, duration);
}

/**
 * Shoot bullet.
 */
Player.prototype.shoot = function () {
	if (this.ammo > 0 && (this.velocity.x != 0 || this.velocity.y != 0)) {
		for (var i = 0; i < Bullets.length; i++) {
			if (!Bullets[i].isUpdated) {
				Bullets[i].recycle(this.center.x, this.center.y, Math2D.sign(this.velocity.x) * GameConstants.BULLET_MAX_SPEED, Math2D.sign(this.velocity.y) * GameConstants.BULLET_MAX_SPEED);
				break;
			}
		}
	}
}

/**
 * Apply powerup to player's properties.
 */
Player.prototype.pickupPowerup = function (powerup) {
	//ammo
	if (powerup.type === ObjectTypes.AMMO_POWERUP) this.ammo += GameConstants.AMMO_POWERUP_BOOST;

	//speed
	if (powerup.type === ObjectTypes.SPEED_POWERUP) {//TODO
		//this.velocity.x *= GameConstants.SPEED_POWERUP_BOOST;
		//this.velocity.y *= GameConstants.SPEED_POWERUP_BOOST;
	}

	//hide
	if (powerup.type === ObjectTypes.HIDE_POWERUP) this.hide(GameConstants.HIDE_POWERUP_DURATION);
}

Player.prototype.glitch = function () {

}

Player.prototype.recycle = function (x, y, vx, vy, health, ammo) {
	this.center.x = x;
	this.center.y = y;
	this.velocity.x = vx;
	this.velocity.y = vy;
	this.health = health;
	this.ammo = ammo;
}