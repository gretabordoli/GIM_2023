function setup() {
	background(255);
	canvasSize = 500
	textAlign(CENTER, CENTER);
	createCanvas(windowWidth,windowHeight);
	
	
}

function draw() {

	translate(width/2 - 250, height/2 - 250) //PER CENTRARE ORIGINE 
	box = 45
	background(255);
	fill(56);
	textSize(box / 1.5);
	textAlign(CENTER);

	
	for (var i = 1; i <= 6; i++) {
		for (var j = 1; j <= 10; j++) {
			
			counter = (i - 1) * 10 + j
			if (counter == second()) {
				fill(102, 0, 102, 102);
			} else {
				fill(153, 204, 204, 255);
			}
			text(counter, box * j, box * i);
		}	
	}

	fill(102, 0, 102, 102);
	textSize(200);
	textAlign(RIGHT);
	text(hour(), 220, canvasSize - 50);
	if (second() % 2 == 0) {
		text(":", 270, canvasSize - 50);	
	}
	
	text(minute(), 490, canvasSize - 50);

}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
