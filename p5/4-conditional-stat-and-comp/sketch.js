function setup() {
    createCanvas(400,400);
    textAlign(CENTER,CENTER);
    frameRate(6);
}

function draw() {
    background(220);
    fill(237,34,93);
    textSize(36);

    var fps = parseInt(frameRate(),10);
    // text("frameRate: " + fps,width/2,height/2);
    text("frameRate: " + frameCount,width/2,height/2);

}