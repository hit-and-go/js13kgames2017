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