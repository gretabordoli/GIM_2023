function setup(){
	createCanvas (windowWidth, windowHeight, WEBGL)
		
	}
	
	function draw(){
	
	background(54, 69, 79)
	
	rotateX (mouseY)
	
	let lato = 400
	//randomSeed (0)
	
	
	for(let i=0; i<100; i=i+1){
	let spessore = random (1, 3)
	let lunghezza = random (20, 100)
	let posX = random (-lato, lato)
	let posY= random (-lato, lato)
	let posZ= random (-lato, lato)
	 
	
	
	stroke(255)
	strokeWeight (spessore)
	line (posX, posY,posZ, posX, posY+ 50 + lunghezza,posZ)
	}
	
	
	}