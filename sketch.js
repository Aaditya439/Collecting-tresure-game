var sword,fruit,fruty,rand,score,band,germ,space,swordSound,gameoverSound,fruit1,rand1;

var gameState = 1;

var PLAY = 1

var END = 0


function preload(){
sword$ = loadImage("sword.png")
fruit1$ = loadImage("fruit1.png")
fruit2$ = loadImage("fruit2.png")
fruit3$ = loadImage("fruit3.png")
fruit4$ = loadImage("fruit4.png")
gameover = loadImage("gameover.png")
germ1 = loadAnimation("alien1.png","alien2.png")
swordSound = loadSound("Swoosh Sound Effects.mp4")
gameoverSound = loadSound("gameover.mp3")
}

function setup(){
createCanvas(500,500)  
sword = createSprite(250,250)  
sword.addImage(sword$)
sword.scale=0.7
score = 0
fruitGroup = new Group();
germsGroup = new Group();
fruit1Group = new Group();
}


function draw(){
background("cyan") 
sword.y=World.mouseY
sword.x=World.mouseX
  
textSize(15)  
text("score:"+ score,400,50);   
fruty()  
microb()
frutys()
if (fruitGroup.isTouching(sword)){
fruitGroup.destroyEach();
score = score + 1
swordSound.play()
}

if (fruit1Group.isTouching(sword)){
fruit1Group.destroyEach();
score = score + 1
swordSound.play()
}
  
  
if (germsGroup.isTouching(sword)){
gameState = END
gameoverSound.play(); 
}  
  
if (keyDown("space") && gameState === END){
gameState = PLAY      
}  

if(gameState === PLAY ){
sword.addImage(sword$)

  
  
  
}  
  
  
if(gameState === END) {
sword.addImage(gameover)  
fruit.visible = false
germs.visible = false
sword.x = 250
sword.y = 250
text ("press space to start",180,200)
score = 0 
} 


  
drawSprites()
}
function fruty(){
  
if (World.frameCount % 80 === 0){
 
fruit=createSprite(400,200,20,20)  
fruit.scale=0.2  
rand=Math.round(random(1,4))
if (rand == 1){
fruit.addImage(fruit1$)
}
else if(rand == 2){
fruit.addImage(fruit2$)  
}
else if(rand == 3){
fruit.addImage(fruit3$) 
}
else if(rand == 4){
fruit.addImage(fruit4$)  
}  

fruit.y = Math.round(random(40,500)) 
  
fruit.velocityX = -(7+(score/2));
console.log(fruit.velocityX)
fruit.setLifetime=100 
fruitGroup.add(fruit)
}   
}

function microb(){
  
if (World.frameCount % 200 === 0){
germs = createSprite(400,200,20,20)
germs.addAnimation("germ1",germ1)
germs.y = Math.round(random(40,500));
germs.velocityX = -(7+(score/5)) 
console.log(germs.velocityX)
germs.setLifetime=50
germsGroup.add(germs)
}               
}
function frutys(){
  
if (World.frameCount % 80 === 0){
 
fruit1=createSprite(50,200,20,20)  
fruit1.scale=0.2  
rand1=Math.round(random(1,4))
if (rand == 1){
fruit1.addImage(fruit1$)
}
else if(rand == 2){
fruit1.addImage(fruit2$)  
}
else if(rand == 3){
fruit1.addImage(fruit3$) 
}
else if(rand == 4){
fruit1.addImage(fruit4$)  
}  

fruit1.y = Math.round(random(40,500)) 
  
fruit1.velocityX = (7+(score/2));

fruit1.setLifetime=100 
fruit1Group.add(fruit1)
}   
}