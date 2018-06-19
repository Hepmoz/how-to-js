function setup() {
    createCanvas(800,300);
    textAlign(CENTER,CENTER);
    frameRate(1);
}

function draw() {
    fill(255);
    textSize(25);
    countdown(5,'Hey');
}

function countdown(number, message) {
    for(var i = 1; i <= number; i++) {
        background(50);
        if(i === number) 
        {
            text(message, width/2, height/2);
        }
        else {
            text(i.toString(), width/2, height/2);    
        }

        console.log(i);
    }

    
}