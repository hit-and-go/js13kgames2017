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
