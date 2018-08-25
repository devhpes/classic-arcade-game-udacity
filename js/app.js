// Enemies our player must avoid
var Enemy = function() {
    'use strict'
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    'use strict'
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = dt;
    this.x += this.speed * dt;

    if (this.x > 500) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 222);
        
    //Setting the collisions between the enemy and the player
    if (player.x < this.x + 65 && player.x + 65 > this.x && player.y < this.y + 50 && 50 + player.y > this.y) {
        // Return player to start position
        player.x = 200;
        player.y = 380;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed){
    'use strict'
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';

}

Player.prototype.update = function(dt) {
    'use strict'
    // Prevent player from moving off the canvas
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // if the player reached the top of the canvas, wining the game
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
