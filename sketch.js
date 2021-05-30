var score=0
function preload(){
groundImg=loadImage("roadside.png");
  boy1=loadAnimation("Geeky-1.png","Geeky-2.png");
  jumpboy=loadAnimation("Geeky-3.png"); 
  breadImg=loadImage("bread.png");
  butterImg=loadImage("butter.png");
  chilliflakes=loadImage("chilli flakes.png")
  chocolateImg=loadImage("chocolate.png");
  frostingImg=loadImage("frosting.png");
  gCheese=loadImage("grated cheese.png");
  gCapcicum=loadImage("greencapcicum.png");
  lettuceImg=loadImage("lettuce.png");
  mangoImg=loadImage("Mango.png");
  milkImg=loadImage("milk.png");
  mushroomImg=loadImage("mushroom.png");
  oliveImg=loadImage("olive.png");
  onionImg=loadImage("onion.png");
  oreganoImg=loadImage("oregano.jpg");
  paneerImg=loadImage("paneer.png");
  pizzaImg=loadImage("pizza.png");
  pizzabImg=loadImage("pizzabase.png");
  rpasta=loadImage("rawpasta.png");
  tsauce=loadImage("tomato sauce.png");
  
}

function setup() {
createCanvas(800,400);
invisibleground=createSprite(280,380,600,10);

boy=createSprite(20,340,10,10);
boy.addAnimation("Boy",boy1);
boy.addAnimation("BoyJump",jumpboy);
boy.scale=0.4
ground=createSprite(280,350,1000,10);
ground.addImage("Ground",groundImg);
ground.velocityX=-4
ground.x = ground.width /2;

//invisibleground.visible = false;
  
score=0
}

function draw() {
  background("yellow")
  console = score
  if (ground.x < 0){
    ground.x = ground.width/2;
    if(keyDown("space") && boy.y >= 700) {
        boy.velocityY = -12;
      }
    
      boy.velocityY = boy.velocityY + 0.8
      boy.collide(invisibleground);
    
  }
  fill("red");
  text(":" + score,50,30);
  spawnObstacle();
  ingredients();
 drawSprites();
}
function spawnObstacle(){
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(200,355,10,40);
    obstacle.velocityX=-6
    
    var rand = Math.round(random(1,7));
    switch(rand) {
      case 1: obstacle.addImage(breadImg);
      obstacle.scale = 0.031;
              break;
      case 2: obstacle.addImage(chocolateImg);
      obstacle.scale = 0.041;
              break;
      case 3: obstacle.addImage(frostingImg);
      obstacle.scale = 0.1;
              break;
      case 4: obstacle.addImage(lettuceImg);
      obstacle.scale = 0.031;
              break;
      case 5: obstacle.addImage(mangoImg);
      obstacle.scale = 0.041;
              break;
      case 6: obstacle.addImage(milkImg);
      obstacle.scale = 0.12;
              break;
      case 7: obstacle.addImage(rpasta);
      obstacle.scale = 0.12;
              break;
      default: break;
    }
    
    obstacle.lifetime=100
  }
}
function ingredients(){
        if(frameCount%60===0){
  var ing = createSprite(200,355,10,40);
ing.x=Math.round(random(100,400))
  ing.velocityX=-6
  var Random=Math.round(random(1,9))
  switch(Random){
          case 1: ing.addImage(butterImg);
          ing.scale=0.2
          break;
          case 2: ing.addImage(chilliflakes);
          ing.scale=0.1
          break;
          case 3: ing.addImage(gCheese);
          ing.scale=0.1
          break;
          case 4: ing.addImage(gCapcicum);
          ing.scale=0.2
          break;
          case 5: ing.addImage(mushroomImg);
          ing.scale=0.01
          break;
          case 6: ing.addImage(oliveImg);
          ing.scale=0.1
          break;
          case 7: ing.addImage(onionImg);
          ing.scale=0.1
          break;
          case 8: ing.addImage(pizzabImg);
          ing.scale=0.1
          break;
          case 9: ing.addImage(tsauce);
          ing.scale=0.1
          break;
         
  }
  ing.lifetime=100
        }
}
