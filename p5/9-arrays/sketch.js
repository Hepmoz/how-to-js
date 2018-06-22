var sizes = [];

function setup() {
    createCanvas(1500,1500);

    for(var i =0; i < 100; i++) {
        var randomValue = random(5,500);
        sizes.push(randomValue);
    }

}

function draw() {
    background(255);
    noFill();
    // fill(random(0,255), random(0,255), random(0,255));
    for(var i = 0; i < sizes.length; i++) {
        ellipse(width/2,height/2,sizes[i],sizes[i]);
    }
}
