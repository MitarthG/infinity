
var ballon,ballonImg;
var cloud,cloudImg,cloudGroup;
var gameState = "play"


function preload(){
 ballonImg = loadImage("ballon.png");
  cloudImg = loadImage("cloud.png");
  
  jump = loadSound("jump.mp3");
   dieSound = loadSound("die.mp3")
}

function setup() {
  createCanvas(600, 200);

  ballon= createSprite(50,160,20,50);
  ballon.addImage("ballon",ballonIng);
  ballon.volicityY=1
  ballon.scale = 0.5;
  
 cloudGroup=new Group();
  
  
}

function draw() {
  background("lightBlue")
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      ballon.x = ballon.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ballon.x = ballon.x + 3;
    }
    
    spawnCloud();
    
     if(cloudGroup.isTouching(ballon)){
      ballon.velocityY = 0;
       
       ballon.destroy();
      gameState = "end"}
       
    drawSprites();
    
     if (gameState === "end"){
    stroke("red");
    fill("dark blue");
    textSize(30);
    text("Game Over", 230,250)
  }
    
}     
       
}
function spawncloud() {
  //write code here to spawn the cloud 
  if (frameCount % 240 === 0) {
    var cloud = createSprite(200, -50);

 cloud.x = Math.round(random(120,400));
 cloud.addImage(cloudImg);
     cloud.velocityY = 1;
ballon.depth = cloud.depth;
    ballon.depth +=1;
  cloud.lifetime = 800;
   cloudGroup.add(cloud);  
    
    
  }  
  }