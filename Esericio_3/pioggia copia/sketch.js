function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
	background(0,0,0)

	rotateX (0,5)
	
	for(let i=0;  i<50; i=i+i){
	 	let lunghezza = random (20, 100)
	    let spessore = random (1, 3)
		let posX = (-200, 200)
		let posY = (-200, 200)
	

		stroke (255)
		strokeWeight (spessore)
		line (posX, posY, posX, posY + lunghezza)
    }
	
}