var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime = 0
var PLAY = 1
var END = 0
var gameState = PLAY


function preload() {



  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  Monkey()
  

  ground = createSprite(100,350,400,20);
  ground.x = ground.width /2;
  
  obstacleGroup = createGroup()
  bananaGroup = createGroup()
  
  
}


function draw() {
  background("white")
text("SurvivalTime : " + SurvivalTime, 200 , 100)

  if (gameState == PLAY){
    
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.5
    
  monkey.collide(ground)
    
    spawnObstacles()
    spawnFruits()
    
    if(obstacleGroup.isTouching(monkey)){
      gameState=END
    }
   SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60); 
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach()
    }
  
  }
if(gameState == END){
  obstacleGroup.destroyEach()
  monkey.velocityX=0
  monkey.velocityY=0
  bananaGroup.destroyEach()
}



  drawSprites()
}

function Monkey() {
  monkey = createSprite(100, 310, 20, 20);
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.1
  
}
function spawnObstacles(){
  
  if(frameCount%120===0){
    obstacle = createSprite(400 , 320 , 20 , 20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.15
  obstacle.velocityX=-6
    
    obstacleGroup.add(obstacle)
  }
}

function spawnFruits(){
  var rand = (Math.round(random(1,3)))
  
  if(frameCount%120===0){
    banana=createSprite(400 , 200 ,  20,20)
    banana.addImage(bananaImage)
    banana.velocityX=-6
    
    banana.scale=0.1
    bananaGroup.add(banana)
  }
//     if(rand==1){
//       banana.x=300
//       banana.velocityX=-4
//       // if(score>4){
//       // fruit.velocityX=-(7+(score/10))
//     }
//     }else if(rand==2){
//        banana.x=210
//        banana.velocityX=-4
      
//   }  else {
//     banana.x=290
//     banana.velocityX=-4
//   }                
    
  

}