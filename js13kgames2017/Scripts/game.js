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