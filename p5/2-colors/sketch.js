function setup() {
    createCanvas(800,400);
}

function draw() {
    //Practice
    var x = 200;
    var y = 200;

    background(220);

    //Circle 01
    fill(51,51,51);
    strokeWeight(2);
    stroke(75);
    ellipse(400,200,x,y);

    //Circle 02
    stroke(0);
    fill(255,53,139);
    ellipse(400,200,x,y);

    //Circle 03
    fill(1,176,240);
    ellipse(400,200,x-25,y-25);

    //Circle 04
    fill(174,238,0);
    ellipse(400,200,x-100,y-100);
}