var goodShip, badShip;
var meteorSound;
var goodShip_Image, badShip_Image;
var laser, fireball;
var laser_Image, fireball_Image;
var meteor, meteor_Image;
var badShipGroup, meteorGroup, fireballGroup
var gameState = "play";
var score = 0;
var coins = 0;
function preload(){
goodShip_Image = loadImage("goodShip1.png")
badShip_Image = loadImage("badShip1.png")
laser_Image = loadImage("Laser .png")
fireball_Image = loadImage("fireball.png")
meteor_Image = loadImage("meteor.png")
meteorSound = loadSound("sound.wav")

}
function setup(){
    createCanvas(1200,600)
    goodShip = createSprite(400,400,50,50)
    goodShip.addImage(goodShip_Image)
    goodShip.scale = 0.3;
    badShipGroup = new Group()
    meteorGroup = new Group()
    fireballGroup = new Group()
    goodShip.setCollider("rectangle", 0,0,100,100)
    goodShip.debug = true
    



}
function draw(){
background(0)
textSize(24)
text("Score: "+ score,1000,50)
if(gameState === "play"){
    score = score + Math.round(getFrameRate()/60)
    spawnBadShips()
    spawnMeteors()
if(keyDown (DOWN_ARROW)&&goodShip.y<550){
goodShip.y = goodShip.y + 5;
        
}
if(keyDown (UP_ARROW)&&goodShip.y>200){
goodShip.y = goodShip.y - 5;
            
}
if(keyDown (LEFT_ARROW)&&goodShip.x>50){
goodShip.x = goodShip.x - 5;
}
 if(keyDown (RIGHT_ARROW)&&goodShip.x<1150){
goodShip.x = goodShip.x + 5;
}
if(meteorGroup.isTouching(goodShip)||fireballGroup.isTouching(goodShip)){
gameState = "end";
}

drawSprites()
}
else if(gameState === "end"){
fill("red")    
textSize(50)    
text("GAME OVER",600,300)





}
//drawSprites()
}
function spawnBadShips(){
if(frameCount%120 === 0){
    badShip = createSprite(200,100,50,50)
    badShip.addImage(badShip_Image)
    badShip.scale = 0.3;
    badShip.velocityX = 5;
    fireball = createSprite(200,100,50,30)
    fireball.addImage(fireball_Image)
    //fireball.velocityX = 10;
    //fireball.velocityY = 10;
    fireball.velocityY = (6 + 3*score/100);
    fireball.velocityX = (6 + 3*score/100);
    //fireball.velocityX = 5;
    fireball.scale  = 0.3;
    fireball.x = badShip.x
    badShipGroup.add(badShip)
    fireballGroup.add(fireball)
    

}


}

function spawnMeteors(){
if(frameCount%60 === 0){
    meteor = createSprite(100, 60,50, 50)
    meteor.addImage(meteor_Image)
    //meteor.velocityX = 5;
    meteor.velocityX = (6 + 3*score/100);
    //meteor.velocityY = 10;
    meteor.scale = 0.2;
    //meteor.x = Math.random(round(200,1000));
    meteor.y = Math.round(random(50,600));
    meteorGroup.add(meteor)
    goodShip.depth = meteor.depth;
    goodShip.depth = goodShip.depth + 1;
    //meteor.debug = true;
    meteorSound.play()
}





}