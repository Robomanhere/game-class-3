var bgimg, bg;
var button;
var gameState = "start";
var gamebgimg, gamebg;
var gun, gunimg;
var zombie, zombieimg;
var rand;
var bullet, bulletimg;


function preload(){
bgimg = loadImage ("Untitled 234.png");
gamebgimg = loadImage("background.jpg");
gunimg = loadImage("gun.png");
zombieimg = loadImage("zombie.png");
bulletimg= loadImage("bullet.png");

}





function setup() {
  createCanvas(1000,600);
  bg = createSprite(500, 300, 50, 50);
  bg.addImage(bgimg);
  bg.scale = 1.15;

  button = createSprite(375,450,370,80);
  button.visible = false;

  gamebg = createSprite(500, 300, 50, 50);
  gamebg.addImage(gamebgimg);
  gamebg.scale = 2;
  gamebg.visible = false;

  gun = createSprite(100, 300, 50, 50);
  gun.visible = false;



 

  
  
 



}

function draw() {
  background(gamebgimg); 
  if (mousePressedOver(button)){
    gameState = "play";
    
  }
  if (gameState === "play"){
  // background(gamebgimg);
   bg.destroy();
   button.destroy();
   gamebg.visible = true;
   //Gun();
   gun.visible = true;
   gun.addImage(gunimg);
   gun.y = mouseY;
  //Zombie();
  spawnZombie();
  if(bullet.bounceOff(zombie)){
  zombie.destroy();
  }
 
   

  }
  drawSprites();
  

}

function Gun (){
}

function spawnZombie(){
 if(frameCount%30 === 0){
  zombie = createSprite(1000,300,40,10);
  zombie.addImage(zombieimg);
  zombie.velocityX = -5;
  zombie.y = Math.round(random(100,600));
}  
}
function mouseClicked(){
  if(gameState === "play"){
  bullet = createSprite(gun.x+150,gun.y-30,10,10);
    bullet.velocityX = 5;
    bullet.addImage(bulletimg);
    bullet.scale=0.1;
}
}
