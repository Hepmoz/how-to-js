var posX = 0;
var posY = 0;
var pressed;

function setup() {
    createCanvas(800,300);
}

function draw() {
    background(155);
    fill(0);

    if(pressed === true) {
        move();
        rect(posX,posY,10,10);
        pressed = false;
    }
}

function keyPressed() {
    pressed = true;

    if(keyCode === ENTER) {
        console.log("pressed");
    }
}

function move() {
    if(keyCode === LEFT_ARROW) {
        console.log("pressed");
        posX = posX - 10;
        return posX;
    }
    else if (keyCode === RIGHT_ARROW) {
        posX = posX + 10;
        return posX;
    }
    else {
        return;
    }
}