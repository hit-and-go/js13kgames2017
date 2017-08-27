function Desktop(element, params) {
	this.keyboard = new Keyboard(params.keyboardActions).activate(element);
	this.mouse = new Mouse(params.mouseActions).activate(element);

	if ($.mode === GameConstants.MODE_DEBUG) console.log('Desktop controls were initialized');
}

function Keyboard(actions) {
	var _this = this;

	this.actionsOnKeyDown = {};
	this.actionsOnKeyUp = {};

	if (actions != null && actions.onKeyDown != null) this.actionsOnKeyDown = actions.onKeyDown;
	if (actions != null && actions.onKeyUp != null) this.actionsOnKeyUp = actions.onKeyUp;

	this.keys = {
		isPressed: {}
	}

	this.onKeyDown = function (e) {
		if (!_this.keys.isPressed[e.keyCode]) {
			_this.keys.isPressed[e.keyCode] = true;

			var i, length;

			if (_this.actionsOnKeyDown['any'] != null && _this.actionsOnKeyDown['any'].length > 0) {
				for (i = 0, length = _this.actionsOnKeyDown['any'].length; i < length; i++) {
					_this.actionsOnKeyDown['any'][i](e);
				}
			}

			if (_this.actionsOnKeyDown[e.keyCode] != null && _this.actionsOnKeyDown[e.keyCode].length > 0) {
				for (i = 0, length = _this.actionsOnKeyDown[e.keyCode].length; i < length; i++) {
					_this.actionsOnKeyDown[e.keyCode][i](e);
				}
			}
		}
	}

	this.onKeyUp = function (e) {
		_this.keys.isPressed[e.keyCode] = false;

		var i, length;

		if (_this.actionsOnKeyUp['any'] != null && _this.actionsOnKeyUp['any'].length > 0) {
			for (i = 0, length = _this.actionsOnKeyUp['any'].length; i < length; i++) {
				_this.actionsOnKeyUp['any'][i](e);
			}
		}

		if (_this.actionsOnKeyUp[e.keyCode] != null && _this.actionsOnKeyUp[e.keyCode].length > 0) {
			for (i = 0, length = _this.actionsOnKeyUp[e.keyCode].length; i < length; i++) {
				_this.actionsOnKeyUp[e.keyCode][i](e);
			}
		}
	}
}
Keyboard.prototype.activate = function (element) {
	element.addEventListener('keydown', this.onKeyDown);
	element.addEventListener('keyup', this.onKeyUp);
}

function Mouse(actions) {
	var _this = this;

	this.actionsOnMouseDown = [];
	this.actionsOnMouseUp = [];
	this.actionsOnMouseMove = [];

	if (actions != null && actions.onMouseDown != null) this.actionsOnMouseDown = actions.onMouseDown;
	if (actions != null && actions.onMouseUp != null) this.actionsOnMouseUp = actions.onMouseUp;
	if (actions != null && actions.onMouseMove != null) this.actionsOnMouseMove = actions.onMouseMove;

	this.buttons = {
		isPressed: {}
	}

	this.x = 0;
	this.y = 0;

	this.onMouseDown = function (e) {
		if (!_this.buttons.isPressed[e.button]) {
			_this.buttons.isPressed[e.button] = true;

			var i, length;

			if (_this.actionsOnMouseDown.length > 0) {
				for (i = 0, length = _this.actionsOnMouseDown.length; i < length; i++) {
					_this.actionsOnMouseDown[i](e);
				}
			}
		}
	}

	this.onMouseUp = function (e) {
		_this.buttons.isPressed[e.button] = false;

		var i, length;

		if (_this.actionsOnMouseUp.length > 0) {
			for (i = 0, length = _this.actionsOnMouseUp.length; i < length; i++) {
				_this.actionsOnMouseUp[i](e);
			}
		}
	}

	this.onMouseMove = function (e) {
		_this.x = e.clientX;
		_this.y = e.clientY;

		var i, length;

		if (_this.actionsOnMouseMove.length > 0) {
			for (i = 0, length = _this.actionsOnMouseMove.length; i < length; i++) {
				_this.actionsOnMouseMove[i](e);
			}
		}
	}
}
Mouse.prototype.activate = function (element) {
	element.addEventListener('mousedown', this.onMouseDown);
	element.addEventListener('mouseup', this.onMouseUp);
	element.addEventListener('mousemove', this.onMouseMove);
}
function Mobile(element) {
	this.touchpad = new Touchpad().activate(element);
	this.gyroscope = new Gyroscope().activate(element);
	this.accelerometer = new Accelerometer().activate(element);

	if ($.mode === 'debug') console.log('Mobile controls were initialized');
}

function Touchpad(actions) {
    var _this = this;

    this.actionsOnTouchStart = [];
    this.actionsOnTouchEnd = [];
    this.actionsOnTouchMove = [];

    if (actions != null && actions.onTouchStart != null) this.actionsOnTouchStart = actions.onTouchStart;
    if (actions != null && actions.onTouchEnd != null) this.actionsOnTouchEnd = actions.onTouchEnd;
    if (actions != null && actions.onTouchMove != null) this.actionsOnTouchMove = actions.onTouchMove;

    this.onTouchStart = function (e) {

}

    this.onTouchEnd = function (e) {

}

    this.onTouchMove = function (e) {

}
}
Touchpad.prototype.activate = function (element) {
    element.addEventListener('touchstart', this.onTouchStart);
    element.addEventListener('touchend', this.onTouchEnd);
    element.addEventListener('touchmove', this.onTouchMove);
}

function Gyroscope() {

}
Gyroscope.prototype.activate = function (element) {

}
/**
 * Predefined game sounds.
 */
function Sounds() { }

//Player shoot.
Sounds.SHOOT = [2, , 0.1377, 0.1855, 0.2461, 0.6816, 0.0768, -0.3795, , , , , , 0.1207, 0.0623, , , , 1, , , , , 0.21];
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
/**
 * Exception occurs, when collision logic was not registered for the object.
 * @param {Object} object Unregistered object.
 */
function UndefinedCollisionTypeError(object) {
	Error.call(this, (object.toString() || ""));

	this.name = "UndefinedCollisionTypeError";
}

UndefinedCollisionTypeError.prototype = Object.create(Error.prototype);
UndefinedCollisionTypeError.prototype.constructor = UndefinedCollisionTypeError;


/**
 * Base object with unique index and its center.
 * @param {Number} id Unique identifier of the object.
 * @param {Number} x Horizontal dimensional position of the center.
 * @param {Number} y Vertical dimensional position of the center.
 */
function BaseObject(id, x, y) {
	this.id = id;
	this.center = new Vector2D(x, y);
}

/**
 * Create vector from center of the object to provided point.
 * @param {Vector2D} point Destination point for calculation.
 * @returns {Vector2D} Resulted vector.
 */
BaseObject.prototype.vectorTo = function (point) {
	return new Vector2D(point.x - this.center.x, point.y - this.center.y);
}

/**
 * Calculate distance beetween object's center and provided point.
 * @param {Vector2D} point Point for calculation.
 * @returns {Number} Distance.
 */
BaseObject.prototype.distance = function (point) {
	return Math2D.distance(this.center, point)
}
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
/**
 * Point game object.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis. 
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function PointGameObject(id, x, y, vx, vy, isUpdated, isRendered) {
	GameObject.call(this, id, x, y, vx, vy, isUpdated, isRendered);

	this.radius = 1;
	this.shape = ShapeTypes.POINT;
}

PointGameObject.prototype = Object.create(GameObject.prototype);
PointGameObject.prototype.constructor = PointGameObject;

/**
 * Check, whether the object collide with provided object.
 * @param {GameObject} gameObject Instanceo of the game object.
 * @returns {Boolean} true if collision occurs or false otherwise.
 */
PointGameObject.prototype.isCollide = function (gameObject) {
	if (gameObject.shape === ShapeTypes.POINT)
		return false;
	if (gameObject.shape === ShapeTypes.CIRCLE) {
		return Math2D.isCircleCircleInterseсt(this.center, this.radius, gameObject.center, gameObject.radius);
	}
	if (gameObject.shape === ShapeTypes.RECTANGLE) {
		return Math2D.isRectangleCircleIntersect(gameObject.center, gameObject.width, gameObject.height, this.center, this.radius);
	}

	throw new UndefinedCollisionTypeError(gameObject);
}
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
/**
 * Ammo for player's gun.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Number} width
 * @param {Number} height 
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function AmmoPowerup(id, x, y, vx, vy, width, height, isUpdated, isRendered) {
	BasePowerup.call(this, id, x, y, vx, vy, width, height, isUpdated, isRendered, ObjectTypes.AMMO_POWERUP, null);//TODO sprite
}

AmmoPowerup.prototype = Object.create(BasePowerup.prototype);
AmmoPowerup.prototype.constructor = AmmoPowerup;
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

/**
 * Hide boost for player.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Number} width
 * @param {Number} height 
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function HidePowerup(id, x, y, vx, vy, width, height, isUpdated, isRendered) {
	BasePowerup.call(this, id, x, y, vx, vy, width, height, isUpdated, isRendered, ObjectTypes.HIDE_POWERUP, null);//TODO sprite
}

HidePowerup.prototype = Object.create(BasePowerup.prototype);
HidePowerup.prototype.constructor = HidePowerup;
/**
 * Speed boost for player.
 * @param {Number} id Unique identifier in the game.
 * @param {Number} x Object's center, horizontal coordinate.
 * @param {Number} y Object's center, vertical coordinate.
 * @param {Number} vx Object's velocity, X axis.
 * @param {Number} vy Object's velocity, Y axis.
 * @param {Number} width
 * @param {Number} height 
 * @param {Boolean} isUpdated Flag represents, is object need to be updated or not.
 * @param {Boolean} isRendered Flag represents, is object should be rendered or not.
 */
function SpeedPowerup(id, x, y, vx, vy, width, height, isUpdated, isRendered) {
	BasePowerup.call(this, id, x, y, vx, vy, width, height, isUpdated, isRendered, ObjectTypes.SPEED_POWERUP, null);//TODO sprite
}

SpeedPowerup.prototype = Object.create(BasePowerup.prototype);
SpeedPowerup.prototype.constructor = SpeedPowerup;
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
		if(this.)
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
/**
 * Predefined game constants.
 */
function GameConstants() { }

GameConstants.MODE_DEBUG = 0;
GameConstants.MODE_RELEASE = 1;

GameConstants.CONTROL_DESKTOP = 0;
GameConstants.CONTROL_MOBILE = 1;

GameConstants.GAME_HEIGHT = 400;


GameConstants.PLAYER_RADIUS = 5;
GameConstants.PLAYER_MARGIN_FACTOR = 3;
GameConstants.PLAYER_RADIUS_WITH_MARGIN = GameConstants.PLAYER_RADIUS + GameConstants.PLAYER_MARGIN_FACTOR;
GameConstants.PLAYER_HEALTH = 100;
GameConstants.PLAYER_AMMO = 10;
GameConstants.PLAYER_MAX_SPEED = 1;

GameConstants.BULLET_MAX_LIMIT = 10;
GameConstants.BULLET_SIZE = 2;
GameConstants.BULLET_MAX_SPEED = 2;
GameConstants.BULLET_LOW_POWER_LIMIT = 3;
GameConstants.BULLET_MIDDLE_POWER_LIMIT = 7;
GameConstants.BULLET_HIGH_POWER_LIMIT = 10;

GameConstants.AMMO_POWERUP_BOOST = 5;
GameConstants.SPEED_POWERUP_BOOST = 2;
GameConstants.HIDE_POWERUP_DURATION = 3000;

GameConstants.NODE_MAX_LIMIT = 20;
GameConstants.NODE_MIN_RADIUS = 2;
GameConstants.NODE_MAX_RADIUS = 7;
GameConstants.NODE_HEALTH = 100;
GameConstants.NODE_SCAN_RADIUS = 3;
GameConstants.NODE_TRACE_RADIUS = 4;
GameConstants.NODE_ALPHA = 1;
GameConstants.NODE_LOW_POWER_LIMIT = 3;
GameConstants.NODE_MIDDLE_POWER_LIMIT = 7;
GameConstants.NODE_HIGH_POWER_LIMIT = 10;

/**
 * Predefined game object types.
 */
function ObjectTypes() {
}

//Player.
ObjectTypes.PLAYER = 0;
//Blind spider.
ObjectTypes.SPIDER = 1;
//Spider node of spy web.
ObjectTypes.NODE = 2;
//Just a brick.
ObjectTypes.BRICK = 3;
//Ammo for player's gun.
ObjectTypes.AMMO_POWERUP = 4;
//Speed boost for player.
ObjectTypes.SPEED_POWERUP = 5;
//Hide boost for player.
ObjectTypes.HIDE_POWERUP = 6;
//Bullet from player's gun.
ObjectTypes.BULLET = 7;
/**
 * Predefined geometric shape types.
 */
function ShapeTypes() { }

//Just a point, nothing else.
ShapeTypes.POINT = 0;
//Circle.
ShapeTypes.CIRCLE = 1;
//Simple rectangle.
ShapeTypes.RECTANGLE = 2;
/**
 * Methods for playing sounds.
 */
function Audio() { }

/**
 * Play sound with jsfxr library.
 * @param {Object} params Collection of notes and intervals.
 */
Audio.playSound = function (params) {
	try {
		var soundURL = jsfxr(params);
		var player = new Audio();
		player.src = soundURL;
		player.play();
	} catch (e) {
		console.log(e);
	}
}
function GridMap() {
	//var _this = this;

	//this.n = 0;
	//this.m = 0;

	//this.width = 0;
	//this.height = 0;

	//this.ceilWith = 0;
	//this.ceilHeight = 0;

	//if (args.n != null) this.n = args.n;
	//if (args.m != null) this.m = args.m;
	//if (args.width != null) this.width = args.width;
	//if (args.height != null) this.height = args.height;

	//this.ceilWith = this.width / this.m;
	//this.ceilHeight = this.height / this.n;

	//this.ceils = new Array(n * m);

	//this.getCeilIndex = function (x, y) {

	//	return 0;
	//}
}

GridMap.prototype.getCollisions = function (gameObject, types, args) {
	var gameObjectIds = new Array();
	for (var i = 0; i < Pool.length; i++) {
		if (Pool[i].id != gameObject.id) {
			if (types.indexOf(Pool[i].type) > 0) {
				if (gameObject.isCollide(Pool[i])) {
					gameObjectIds.push(Pool[i].id)
				}
			}
		}
	}

	return gameObjectIds;
}

GridMap.prototype.isOutOfBounds = function (gameObject) {

}

//Grid.indexex = [];
//Grid.cells = [];

//Grid.put = function (gameObject) {

//}

//Grid.update = function (gameObject) {

//}

//Grid.clear = function () {
//	Grid.objects = [];
//	Grid.cells = [];
//}

//Grid.getCell = function (index) {

//}

//Grid.getNeighborsCells = function (index) {

//}

//function Cell(x, y, width, height, index) {
//	BaseObject.call(this, x, y, index);

//	this.width = width;
//	this.height = height;
//}
/**
 * Basic two dimensional functions and constants.
 */
function Math2D() {
}

/**
 * Two dimenstional vector.
 * @param {Number} x Horizontal axis coordinate. 
 * @param {Number} y Vertical axis coordinate.
 * @return {Number} New instance of Vector2D.
 */
function Vector2D(x, y) {
	this.x = x;
	this.y = y;
}

/**
 * Calculate signum of provided number.
 * @param {Number} number Processing number.
 * @returns {Number} 1,0 or -1. 
 */
Math2D.sign = function (number) {
	if (number > 0) return 1;
	if (number == 0) return 0;
	if (number < 0) return -1
}

/**
 * Calculate distance between two points.
 * @param {Vector2D} point1 First point.
 * @param {Vector2D} point2 Second point.
 * @returns {Number} Distance.
 */
Math2D.distance = function (point1, point2) {
	return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
}

/**
 * Check if two circles intersect.
 * @param {Vector2D} center1 Center of the first circle.
 * @param {Number} r1 Radius of the first circle.
 * @param {Vector2D} center2 Center of the second circle.
 * @param {Number} r2 Radius of the second circle.
 * @returns {Boolean} true if circles intersect or false otherwise.
 */
Math2D.isCircleCircleInterseсt = function (center1, r1, center2, r2) {
	return Math2D.distance(center1, center2) < r1 + r2;
}

/**
 * Check if rectangle and circle intersect.
 * @param {Vector2D} center1 Center of the rectangle.
 * @param {Number} w1 Width of the rectangle.
 * @param {Number} h1 Height of the rectangle.
 * @param {Vector2D} center2 Center of the circle.
 * @param {Number} r2 Radius of the circle.
 * @returns {Boolean} true if rectangle and circle intersect or false otherwise.
 */
Math2D.isRectangleCircleIntersect = function (center1, w1, h1, center2, r2) {
	var distX = Math.abs(center2.x - center1.x);
	var distY = Math.abs(center2.y - center1.y);

	if (distX > (w1 / 2 + r2)) return false;
	if (distY > (h1 / 2 + r2)) return false;

	if (distX <= w1 / 2) return true;
	if (distY <= h1 / 2) return true;

	var dx = distX - w1 / 2;
	var dy = distY - h1 / 2;

	return Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(r2, 2);
}

/**
 * Check if two rectangles intersect.
 * @param {Vector2D} center1 Center of the first rectangle.
 * @param {Number} w1 Width of the first rectangle.
 * @param {Number} h1 Height of the first rectangle.
 * @param {Vector2D} center2 Center of the second rectangle.
 * @param {Number} w2 Width of the second rectangle.
 * @param {Number} h2 Height of the second rectangle.
 * @returns {Boolean} tru if rectangles intersect or false otherwise.
 */
Math2D.isRectangleRectangleIntersect = function (center1, w1, h1, center2, w2, h2) { //TODO
	return 2 * center1.x - w1 < 2 * center2.x + w2 &&
           2 * center1.x + w1 > 2 * center2.x - w2 &&
           2 * center1.y - h1 < 2 * center2.y + h2 &&
           2 * center1.y + h1 > 2 * center2.y - h2;
}
function Level(gridWidth, gridHeight, maxRoomsCount, minRoomSize, maxRoomSize) {
	this.width = gridWidth;
	this.height = gridHeight;

	this.rooms = [];

	this.grid = new Array(this.width);

	for (var i = 0 ; i < this.width; i++) this.grid[i] = new Array(this.height);
}

Level.prototype.generate = function (mapWidth, mapHeight, maxRoomsCount, minRoomSize, maxRoomSize) {
	return new Level()
                    .generateRooms()
                    .generateHorizontalCoridors()
                    .generateVerticalCoridors();
}

Level.prototype.generateRooms = function () {

	this.rooms = new Array();

	for (var i = 0; i < Const.MAX_ROOMS_COUNT; i++) {
		var w = Const.MIN_ROOM_SIZE + Math.random() * (Const.MAX_ROOM_SIZE - cons)
	}

	return this;
}
Level.prototype.generateVerticalCoridors = function () {

}
Level.prototype.generateHorizontalCoridors = function () {

}



function Room(x, y, w, h) {
	this.x0 = x;
	this.x1 = x + w;
	this.y0 = y;
	this.y1 = y + h;

	this.width = w;
	this.heigth = h;

	this.x = x * CONST.TILE_WIDTH;
	this.y = y * CONST.TILE_HEIGHT;

	this.center = new Vector2D(Math.floor((this.x0 + this.x1) / 2), Math.floor((this.y0 + this.y1) / 2));
}

Room.prototype.leftTop = function () {
	return this.v0
}

Room.prototype.intersect = function (room) {
	return (this.x0 <= room.x1 && this.x1 >= room.x0 &&
            this.y0 <= room.y1 && room.y1 >= room.y0);
}

function CONST() { }
CONST.TILE_WIDTH = 2;
CONST.TILE_HEIGHT = 2;
function SfxrParams() { this.setSettings = function (r) { for (var a = 0; 24 > a; a++) this[String.fromCharCode(97 + a)] = r[a] || 0; this.c < .01 && (this.c = .01); var t = this.b + this.c + this.e; if (.18 > t) { var e = .18 / t; this.b *= e, this.c *= e, this.e *= e } } } function SfxrSynth() { this._params = new SfxrParams; var r, a, t, e, s, n, i, h, f, c, o, v; this.reset = function () { var r = this._params; e = 100 / (r.f * r.f + .001), s = 100 / (r.g * r.g + .001), n = 1 - r.h * r.h * r.h * .01, i = -r.i * r.i * r.i * 1e-6, r.a || (o = .5 - r.n / 2, v = 5e-5 * -r.o), h = 1 + r.l * r.l * (r.l > 0 ? -.9 : 10), f = 0, c = 1 == r.m ? 0 : (1 - r.m) * (1 - r.m) * 2e4 + 32 }, this.totalReset = function () { this.reset(); var e = this._params; return r = e.b * e.b * 1e5, a = e.c * e.c * 1e5, t = e.e * e.e * 1e5 + 12, 3 * ((r + a + t) / 3 | 0) }, this.synthWave = function (u, b) { var w = this._params, m = 1 != w.s || w.v, y = w.v * w.v * .1, g = 1 + 3e-4 * w.w, k = w.s * w.s * w.s * .1, S = 1 + 1e-4 * w.t, l = 1 != w.s, p = w.x * w.x, d = w.g, x = w.q || w.r, A = w.r * w.r * w.r * .2, q = w.q * w.q * (w.q < 0 ? -1020 : 1020), M = w.p ? ((1 - w.p) * (1 - w.p) * 2e4 | 0) + 32 : 0, _ = w.d, U = w.j / 2, j = w.k * w.k * .01, C = w.a, P = r, R = 1 / r, W = 1 / a, z = 1 / t, B = 5 / (1 + w.u * w.u * 20) * (.01 + k); B > .8 && (B = .8), B = 1 - B; for (var D, E, F, G, H, I, J = !1, K = 0, L = 0, N = 0, O = 0, Q = 0, T = 0, V = 0, X = 0, Y = 0, Z = 0, $ = new Array(1024), ra = new Array(32), aa = $.length; aa--;) $[aa] = 0; for (var aa = ra.length; aa--;) ra[aa] = 2 * Math.random() - 1; for (var aa = 0; b > aa; aa++) { if (J) return aa; if (M && ++Y >= M && (Y = 0, this.reset()), c && ++f >= c && (c = 0, e *= h), n += i, e *= n, e > s && (e = s, d > 0 && (J = !0)), E = e, U > 0 && (Z += j, E *= 1 + Math.sin(Z) * U), E |= 0, 8 > E && (E = 8), C || (o += v, 0 > o ? o = 0 : o > .5 && (o = .5)), ++L > P) switch (L = 0, ++K) { case 1: P = a; break; case 2: P = t } switch (K) { case 0: N = L * R; break; case 1: N = 1 + 2 * (1 - L * W) * _; break; case 2: N = 1 - L * z; break; case 3: N = 0, J = !0 } x && (q += A, F = 0 | q, 0 > F ? F = -F : F > 1023 && (F = 1023)), m && g && (y *= g, 1e-5 > y ? y = 1e-5 : y > .1 && (y = .1)), I = 0; for (var ta = 8; ta--;) { if (V++, V >= E && (V %= E, 3 == C)) for (var ea = ra.length; ea--;) ra[ea] = 2 * Math.random() - 1; switch (C) { case 0: H = o > V / E ? .5 : -.5; break; case 1: H = 1 - V / E * 2; break; case 2: G = V / E, G = 6.28318531 * (G > .5 ? G - 1 : G), H = 1.27323954 * G + .405284735 * G * G * (0 > G ? 1 : -1), H = .225 * ((0 > H ? -1 : 1) * H * H - H) + H; break; case 3: H = ra[Math.abs(32 * V / E | 0)] } m && (D = T, k *= S, 0 > k ? k = 0 : k > .1 && (k = .1), l ? (Q += (H - T) * k, Q *= B) : (T = H, Q = 0), T += Q, O += T - D, O *= 1 - y, H = O), x && ($[X % 1024] = H, H += $[(X - F + 1024) % 1024], X++), I += H } I *= .125 * N * p, u[aa] = I >= 1 ? 32767 : -1 >= I ? -32768 : 32767 * I | 0 } return b } } var synth = new SfxrSynth; window.jsfxr = function (r) { synth._params.setSettings(r); var a = synth.totalReset(), t = new Uint8Array(4 * ((a + 1) / 2 | 0) + 44), e = 2 * synth.synthWave(new Uint16Array(t.buffer, 44), a), s = new Uint32Array(t.buffer, 0, 44); s[0] = 1179011410, s[1] = e + 36, s[2] = 1163280727, s[3] = 544501094, s[4] = 16, s[5] = 65537, s[6] = 44100, s[7] = 88200, s[8] = 1048578, s[9] = 1635017060, s[10] = e, e += 44; for (var n = 0, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = "data:audio/wav;base64,"; e > n; n += 3) { var f = t[n] << 16 | t[n + 1] << 8 | t[n + 2]; h += i[f >> 18] + i[f >> 12 & 63] + i[f >> 6 & 63] + i[63 & f] } return h };
/**
 * Common functionality.
 */
function Utils() {
}

/**
 * Get random number between provided minimum and maximum.
 * @param {Number} min Minimum number.
 * @param {Number} max Maximum number.
 * @returns {Number} Generated number. 
 */
Utils.random = function (min, max) {
	return Math.random() * (max - min) + min;
}

/**
 * 
 * @returns {DateTime} 
 */
Utils.prototype.time = function () {
	return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}
var $ = {};
var Pool = {};
var Doc = {};
var SpritePool = {};
var Bullets = new Array(GameConstants.BULLET_MAX_LIMIT);
var Grid = {};

window.onload = function () {
	//doc initialization
	Doc = document;
	SpritePool = new Sprites(Doc);

	//game objects initialization
	Pool = new Array(1 + GameConstants.BULLET_MAX_LIMIT);
	var i = 0;
	//player
	Pool[i] = new Player(i++, 0, 0, 0, 0, GameConstants.PLAYER_RADIUS, true, true, GameConstants.PLAYER_HEALTH, GameConstants.PLAYER_AMMO);

	//spider

	//nodes
	Pool[i] = new Node(i++, 100, 100, 0, 0, Utils.random(GameConstants.NODE_MIN_RADIUS, GameConstants.NODE_MAX_RADIUS), true, true, Utils.random(GameConstants.NODE_LOW_POWER_LIMIT, GameConstants.NODE_HIGH_POWER_LIMIT + 5), GameConstants.NODE_HEALTH, GameConstants.NODE_SCAN_RADIUS, GameConstants.NODE_TRACE_RADIUS, GameConstants.NODE_ALPHA);
	//powerups

	//bullets
	for (var k = 0; i <= GameConstants.BULLET_MAX_LIMIT; i++, k++) {
		Pool[i] = new Bullet(i, 0, 0, 0, 0, false, false, Utils.random(GameConstants.BULLET_LOW_POWER_LIMIT, GameConstants.BULLET_HIGH_POWER_LIMIT + 5));
		Bullets[k] = Pool[i];
	}
	//bricks

	//grid initialization
	Grid = new GridMap();

	//game creation
	var mode = GameConstants.MODE_REALESE;
	var control = GameConstants.CONTROL_DESKTOP;
	if (window.mobileAndTabletCheck()) control = GameConstants.CONTROL_MOBILE;

	$ = new Game(Doc, mode, control);

	$.start();
}

window.mobileAndTabletCheck = function () {
	var check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}
function Game(doc, mode, control) {
	var _this = this;

	this.doc = doc;
	this.mode = mode;
	this.control = control;

	this.requestId = undefined;

	//scaling
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;

	this.scaleFactor = newWidth / newHeight;

	this.height = GameConstants.GAME_HEIGHT;
	this.width = Math.round(this.height * this.scaleFactor - 1);

	var scaleX = this.width / window.innerWidth;
	var scaleY = this.height / window.innerHeight;
	var scaleToFit = Math.min(scaleX, scaleY);

	//canvases and contexts
	//this.backgroundCanvas = this.doc.getElementById("backgroundCanvas");
	this.foregroundCanvas = this.doc.getElementById("foregroundCanvas");
	//this.guiCanvas = this.doc.getElementById("guiCanvas");

	//this.backgroundCanvas.width = this.width;
	//this.backgroundCanvas.height = this.height;
	//this.backgroundCanvas.style.width = newWidth + 'px';
	//this.backgroundCanvas.style.height = newHeight + 'px';

	this.foregroundCanvas.width = this.width;
	this.foregroundCanvas.height = this.height;
	this.foregroundCanvas.style.width = newWidth + 'px';
	this.foregroundCanvas.style.height = newHeight + 'px';

	//this.guiCanvas.width = this.width;
	//this.guiCanvas.height = this.height;
	//this.guiCanvas.style.width = newWidth + 'px';
	//this.guiCanvas.style.height = newHeight + 'px';

	//this.background = this.backgroundCanvas.getContext("2d");
	this.foreground = this.foregroundCanvas.getContext("2d");
	//this.gui = this.guiCanvas.getContext("2d");

	//controls initialization
	if (this.control === GameConstants.CONTROL_DESKTOP) {
		if (this.mode === GameConstants.MODE_DEBUG) console.log('desktop');

		var keyBindings = {
			onKeyDown: {
				'any': [],
				'87': [function (e) { Pool[0].moveUp(); }],//W
				'65': [function (e) { Pool[0].moveLeft(); }],//A
				'83': [function (e) { Pool[0].moveDown(); }],//S
				'68': [function (e) { Pool[0].moveRight(); }],//D
			},
			onKeyUp: {
				'any': [],
				'87': [function (e) { Pool[0].stopY(); }],//W
				'65': [function (e) { Pool[0].stopX(); }],//A
				'83': [function (e) { Pool[0].stopY(); }],//S
				'68': [function (e) { Pool[0].stopX(); }],//D
			}
		};

		var mouseBindings = {
			onMouseDown: [],
			onMouseUp: [function (e) { Pool[0].shoot(); }],
			onMouseMove: []
		};

		if (this.mode === GameConstants.MODE_DEBUG) {
			keyBindings.onKeyDown['any'].push(function (e) { console.log('key with keycode:' + e.keyCode + ' was pressed'); });
			keyBindings.onKeyUp['any'].push(function (e) { console.log('key with keycode:' + e.keyCode + ' was realeased'); });
			mouseBindings.onMouseDown.push(function (e) { console.log('mouse button with code:' + e.button + ' was pressed'); })
			mouseBindings.onMouseUp.push(function (e) { console.log('mouse button with code:' + e.button + ' was realesed'); })
			mouseBindings.onMouseMove.push(function (e) { console.log('Mouse cursor coordinates: x:' + e.clientX + ', y:' + e.clientY); })
		}

		var desktopParams = {
			keyboardActions: keyBindings,
			mouseActions: mouseBindings
		}
		this.desktop = new Desktop(this.doc, desktopParams);
	}
	else {
		console.log('mobile');

		//this.mobile = new Mobile(this.doc);
	}



	//	var desktopParams = {
	//		keyboardActions: keyBindings,
	//		mouseActions: mouseBindings
	//	}
	//	//if ($.device === 'desktop') {
	//	this.desktop = new Desktop(this.doc, desktopParams);
	//	//}
	//	//if ($.device === 'mobile') {
	//	//    this.mobile = new Mobile(this.doc);
	//	//}
	//}
	//this.Start = function () {
	//	if ($.mode === 'debug') console.log('game was started');

	//	requestAnimationFrame(this.frame);
	//}

	//this.Stop = function () {
	//	if ($.mode === 'debug') console.log('game was stoped');

	//	if (requestId) {
	//		window.cancelAnimationFrame(requestId);
	//		requestId = undefined;
	//	}
	//}

	this.frame = function () {
		//_this.timeNow = GetTimeStamp();

		//_this.dt = (_this.timeNow - _this.timeLast) / 1000;
		//_this.timeElapsed += _this.dt;

		_this.update();
		_this.render();

		//_this.timeLast = _this.timeNow;

		if (_this.requestId) {
			_this.requestId = requestAnimationFrame(_this.frame);
		}
	}
}

Game.prototype.update = function () {
	if (Pool != null && Pool.length > 0) {
		for (var i = 0; i < Pool.length; i++) {
			Pool[i].update();
		}
	}
}

Game.prototype.render = function () {
	this.foreground.save();
	this.foreground.clearRect(0, 0, this.width, this.height);

	if (Pool != null && Pool.length > 0) {
		for (var i = 0; i < Pool.length; i++) {
			Pool[i].render();
		}
	}

	this.foreground.restore();
}

Game.prototype.start = function () {
	if (this.mode === GameConstants.MODE_DEBUG) console.log('game was started');

	this.requestId = window.requestAnimationFrame(this.frame);
}

Game.prototype.stop = function () {
	if (this.mode === GameConstants.MODE_DEBUG) console.log('game was stoped');

	if (this.requestId) {
		window.cancelAnimationFrame(this.requestId);
		this.requestId = undefined;
	}
}
function GUI() {
	this.score = 0;
	this.ammo = 100;
	this.lives = 3;

	this.level = 1;

	this.dificulty = 'easy';
}