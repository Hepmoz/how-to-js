var num;

function setup() {
    num = 1;
    createCanvas(800,300);
    textAlign(CENTER,CENTER);
}

function draw() {
    var value;
    background(220);
    fill(237, 34, 93);
    textSize(48);

    if(num === 1) {
        value = 'TRUE';    
    } else if (num === 2) {
        value = 'STILL TRUE';
    } else if (num === 3) {
        value = 'YEP,TRUE!';
    } else {
        value = 'FALSE';
    }
    text(value, width/2, height/2);
}