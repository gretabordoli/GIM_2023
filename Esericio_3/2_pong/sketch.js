let posX   //200 è il punto centrale posso scrivere anche: 
let posY 
let velX
let velY

function setup(){

	createCanvas(800, 600)
	posX = width/2
	posY = height/2
    velX = random (-4, 4)
    velY = random (-4, 4)
	background (255, 255, 255) 
	
}

function draw(){
	noStroke ()
    fill (random (500), random (500), random (500))
	// fill (map ( posX , 0, width, 0, 60), map ( posy, 0, width, 0, 60), 0)

 

ellipse ( posX, posY, 100, 100)
posX = posX + velX
posY = posY + velY

//if (posX >= 400) velX = -velX
//if (posX <= 0) velX = -velX

if (posX >= width|| posX <= 0) velX = -velX
if (posY >= height|| posY <= 0) velY = -velY

}

 function keyPressed (){
	save ("pong.png")  //per salvare K
}

