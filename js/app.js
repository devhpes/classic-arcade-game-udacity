// Enemies our player must avoid
let Enemy = function(x, y, speed) {
    "use strict";
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
    "use strict";
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = dt;
    this.x += this.speed * dt;

    if (this.x > 500) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 222);
    }
        
    //Setting the collisions between the enemy and the player
    if (player.x < this.x + 65 && player.x + 65 > this.x && player.y < this.y + 50 && 50 + player.y > this.y) {
        // Return player to start position
        player.x = 200;
        player.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y, speed){
    "use strict";
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    "use strict";
    // if the player reached the top of the canvas, wining the game
    if (this.y < 0) {
        modalToggle();
        this.x = 200;
        this.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
//Taking randome positions
const enemyPosition = [60, 140, 230];
//Instantiating the player object and taking the intial position
const player = new Player(200, 380, 50);

//for each loop to set the enemy at different position
//Thanks to my friend for this forEach
enemyPosition.forEach(function(locY) {
    "use strict";
    const enemy = new Enemy(0, locY, 300);
    allEnemies.push(enemy);
});

Player.prototype.handleInput = function(key) {
    "use strict";
        if(key == "left" && this.x > 0){
            this.x -= 20;
        }
        if(key == "up" && this.x < 380){
            this.y -= 20;
        }
        if(key == "right" && this.y > 0){
            this.x += 20;
        }
        if(key == "down" && this.y < 380){
            this.y += 20;
        }
        //Added enter key, if user press the enter key on keyboard, the popup
        //wil disappear and game will restart
        if(key == "enter" && this.y < 0){
            playAgain();
        }
    };

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    "use strict";
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        13: 'enter'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//Selecting congratulation modal div
const congoModal = document.querySelector('.modalBody');
//Congratulation modal popup
function modalToggle() {
    "use strict"; // turn on Strict Mode
    //Hiding the modal
    congoModal.classList.toggle('hide');
    //Calling reset function
    reset();
}

//reseting the game player and enemies
function reset(){
    "use strict";
    //Instantiating the player
    const player = new player();
    //Instantiating the enemy
    const enemy = new enemy();
}

//Playagain function, game will reload after the player click on the playagain button
function playAgain() {
    "use strict"; // turn on Strict Mode
    //reloading the browser when user click on play again button to start a new game
    location.reload();
    //Toggling the modal, when user click on play again button
    modalToggle();
}

//Being sure that the modal don't popup accidentally
modalToggle();