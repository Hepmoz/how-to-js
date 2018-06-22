var count = 0;

function setup() {
    createCanvas(1000,1000);
}

function draw() {
    rect(count,0,50,50);
    rect(count,50,50,50);
    rect(count,100,50,50);
    rect(count,150,50,50);
    rect(count,200,50,50);

    count = count + 1;
}