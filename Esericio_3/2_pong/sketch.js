let posX = 200 
let posY = 200 
let velX = 5
let velY = 8

function setup(){

	createCanvas(400, 400)
}

function draw(){

 //background (200)

ellipse ( posX, posY, 20, 20)
posX = posX + velX
posY = posY + velY

//if (posX >= 400) velX = -velX
//if (posX <= 0) velX = -velX

if (posX >= width|| posX <= 0) velX = -velX
if (posY >= height|| posY <= 0) velY = -velY


}