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