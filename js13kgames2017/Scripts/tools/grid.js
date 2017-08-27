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