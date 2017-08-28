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