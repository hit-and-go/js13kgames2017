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