let posX   //200 è il punto centrale posso scrivere anche: 
let posY 
let velX
let velY

function setup(){

	createCanvas(800, 400)
	posX = width/2
	posY = height/2
    velX = random (-4, 4)
    velY = random (-4, 4)
	background (240, 60, 0)
}

function draw(){

 

ellipse ( posX, posY, 20, 20)
posX = posX + velX
posY = posY + velY

//if (posX >= 400) velX = -velX
//if (posX <= 0) velX = -velX

if (posX >= width|| posX <= 0) velX = -velX
if (posY >= height|| posY <= 0) velY = -velY

}

 function keyPressed (){
	save ("pong.png")
}

