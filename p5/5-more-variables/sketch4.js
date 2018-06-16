function setup() {
    createCanvas(800,300);
}

function draw() {
    background(1,75,100);

    if(mouseIsPressed === true) {
        fill(237,34,93);
        noStroke();
        rect(mouseX,mouseY,50,50);
    }
}