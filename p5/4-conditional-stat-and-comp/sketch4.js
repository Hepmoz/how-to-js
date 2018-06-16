function setup() {
    createCanvas(800,500);
    background(220);
}
var move = 0;
var pos = -50;

function draw() {
    rect(pos+move,0,100,100);
    rect(pos+(move*0.1),100,100,100);
    rect(pos+(move*0.2),200,100,100);
    rect(pos+(move*0.3),300,100,100);
    rect(pos+(move*0.4),400,100,100);

    if(pos !== (width/2))
    {
        move = move + frameCount;
    }
}