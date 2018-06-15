//goblal var
var canvasWidth = 1000;
var canvasHeight = 500;

function setup() {
    createCanvas(canvasWidth,canvasHeight);
    rectMode(CENTER);
}

var count = 0;

function draw() {
    background(1,186,240);
    
    //width and height var are from p5.js library
    //declaration of variables
    var x = width/2;
    var y = height/2;
    var size = count + 200;

    //circle
    fill(237,34,93);
    noStroke();
    ellipse(x,y,size,size);

    //rectangle
    fill(255);
    rect(x,y,size*0.75,size*0.15);

    count = count + 1;
}