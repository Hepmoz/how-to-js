function setup() {
    createCanvas(1000,1000);
}

function draw() {
    background(1,75,100);
    grid(10,30,20);
}

function grid(numX, numY, size) {
    var posX = 0;
    var posY = 0;

    for(var i = 0; i < numX; i=i+1) {
        for(var j = 0; j < numY; j=j+1) {
            fill(127,255,214);
            rect(posX,posY,size,size);
            posY = posY + size;
        }
        posY = 0;
        posX = posX + size;
    }
}