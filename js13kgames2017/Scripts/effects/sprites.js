/**
 * Predefined game sprites.
 */
function Sprites(doc) {
	//player
	this.player = this.playerStayDraw(doc.createElement('canvas'));
	this.playerLeftDown = this.playerLeftDownDraw(doc.createElement('canvas'));
	this.playerLeft = this.playerLeftDraw(doc.createElement('canvas'));
	this.playerLeftUp = this.playerLeftUpDraw(doc.createElement('canvas'));
	this.playerUp = this.playerUpDraw(doc.createElement('canvas'));
	this.playerRightUp = this.playerRightUpDraw(doc.createElement('canvas'));
	this.playerRight = this.playerRightDraw(doc.createElement('canvas'));
	this.playerRightDown = this.playerRightDownDraw(doc.createElement('canvas'));
	this.playerDown = this.playerDownDraw(doc.createElement('canvas'));
	//bullet
	this.bulletLowPower = this.bulletLowPowerDraw(doc.createElement('canvas'));
	this.bulletMiddlePower = this.bulletMiddlePowerDraw(doc.createElement('canvas'));
	this.bulletHighPower = this.bulletHighPowerDraw(doc.createElement('canvas'));
	//nodes
	this.nodesLowPower = [GameConstants.NODE_MAX_RADIUS];
	for (var i = 0; i < this.nodesLowPower.length; i++) {
		this.nodesLowPower[i] = this.nodeLowPowerDraw(doc.createElement('canvas'), i);
	}
	this.nodesMiddlePower = [GameConstants.NODE_MAX_RADIUS];
	for (var i = 0; i < this.nodesMiddlePower.length; i++) {
		this.nodesMiddlePower[i] = this.nodeMiddlePowerDraw(doc.createElement('canvas'), i);

	}
	this.nodesHighPower = [GameConstants.NODE_MAX_RADIUS];
	for (var i = 0; i < this.nodesHighPower.length; i++) {
		this.nodesHighPower[i] = this.nodeHighPowerDraw(doc.createElement('canvas'), i);

	}
}

//player
Sprites.prototype.playerStayDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	return canvas;
}

Sprites.prototype.playerInitCanvas = function (canvas) {
	canvas.width = GameConstants.PLAYER_RADIUS_WITH_MARGIN * 2;
	canvas.height = GameConstants.PLAYER_RADIUS_WITH_MARGIN * 2;
}

Sprites.prototype.playerDraw = function (context) {
	context.beginPath();
	context.arc(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS, 0, 2 * Math.PI, false);
	context.strokeStyle = 'green';
	context.fillStyle = 'black'
	context.fill();
	context.lineWidth = 1;
	context.stroke();
}

Sprites.prototype.playerLeftDownDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo(0, GameConstants.PLAYER_RADIUS_WITH_MARGIN * 2);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerLeftDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo(0, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerLeftUpDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo(0, 0);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerUpDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, 0);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerRightDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo((GameConstants.PLAYER_RADIUS_WITH_MARGIN) * 2, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerRightUpDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo((GameConstants.PLAYER_RADIUS_WITH_MARGIN) * 2, 0);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerDownDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, (GameConstants.PLAYER_RADIUS_WITH_MARGIN) * 2);
	context.stroke();

	return canvas;
}

Sprites.prototype.playerRightDownDraw = function (canvas) {
	this.playerInitCanvas(canvas);

	var context = canvas.getContext('2d');

	this.playerDraw(context);

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(GameConstants.PLAYER_RADIUS_WITH_MARGIN, GameConstants.PLAYER_RADIUS_WITH_MARGIN);
	context.lineTo((GameConstants.PLAYER_RADIUS_WITH_MARGIN) * 2, (GameConstants.PLAYER_RADIUS_WITH_MARGIN) * 2);
	context.stroke();

	return canvas;
}

//bullet
Sprites.prototype.bulletLowPowerDraw = function (canvas) {
	canvas.width = GameConstants.BULLET_SIZE;
	canvas.height = GameConstants.BULLET_SIZE;

	var context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = "yellow";
	context.fillRect(0, 0, GameConstants.BULLET_SIZE, GameConstants.BULLET_SIZE);

	return canvas;
}

Sprites.prototype.bulletMiddlePowerDraw = function (canvas) {
	canvas.width = GameConstants.BULLET_SIZE;
	canvas.height = GameConstants.BULLET_SIZE;

	var context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = "orange";
	context.fillRect(0, 0, GameConstants.BULLET_SIZE, GameConstants.BULLET_SIZE);

	return canvas;
}

Sprites.prototype.bulletHighPowerDraw = function (canvas) {
	canvas.width = GameConstants.BULLET_SIZE;
	canvas.height = GameConstants.BULLET_SIZE;

	var context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = "red";
	context.fillRect(0, 0, GameConstants.BULLET_SIZE, GameConstants.BULLET_SIZE);

	return canvas;
}

//node
Sprites.prototype.nodeLowPowerDraw = function (canvas, radius) {
	canvas.width = radius * 2;
	canvas.height = radius * 2;

	var context = canvas.getContext('2d');

	context.beginPath();
	context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
	context.strokeStyle = 'red';
	context.fillStyle = 'yellow'
	context.fill();
	context.lineWidth = 1;
	context.stroke();

	return canvas;
}

Sprites.prototype.nodeMiddlePowerDraw = function (canvas, radius) {
	canvas.width = radius * 2;
	canvas.height = radius * 2;

	var context = canvas.getContext('2d');

	context.beginPath();
	context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
	context.strokeStyle = 'red';
	context.fillStyle = 'orange';
	context.fill();
	context.lineWidth = 1;
	context.stroke();

	return canvas;
}

Sprites.prototype.nodeHighPowerDraw = function (canvas, radius) {
	canvas.width = radius * 2;
	canvas.height = radius * 2;

	var context = canvas.getContext('2d');

	context.beginPath();
	context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
	context.strokeStyle = 'red';
	context.fillStyle = 'red'
	context.fill();
	context.lineWidth = 1;
	context.stroke();

	return canvas;
}