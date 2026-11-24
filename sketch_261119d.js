var ballx = 300;
var bally =300;
var ballsize= 40;
var score = 0;
var gameState= "START";///begin card
 var t = 0;
 var dotImg;
 
 function preload (){
 dotImg = loadImage("Money.jpg");
 }
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  imageMode(CENTER); 
}//end of setup

function draw() {
  if (gameState === "START"){
    drawStartCard();
  } else if(gameState === "L1"){
    background(200);
  levelOne();
  drawScore();
} else if(gameState== "L2"){
  levelTwo();
    drawScore();
  } else if(gameState== "L3"){
  levelThree();
    drawScore();
} else if(gameState== "END"){
  drawEndCard();
}
}
 function drawScore (){
   fill(0);
  text(("Score:" + score ),width/2,40);
}//end of draw
///begincard
function drawStartCard(){
  background(50, 205, 50);
  fill(255);
  textSize(36);
  text("GET YOUR COIN TWIN", width / 2, height / 2 - 40);

  textSize(18);
  text("Capture the money to score points! In this economy your gonna need it!", width / 2, height / 2 + 10);
  text("Click anywhere to start", width / 2, height / 2 + 50);
}

// --- END CARD ---
function drawEndCard() {
  background(50, 205, 50);
  fill(255);
  textSize(20);
  text("YOU'RE RICH!(not really but at least you won the game)", width / 2, height / 2 - 40);

  textSize(22);
  text("Money Score: " + score, width / 2, height / 2 + 10);

  textSize(18);
  text("PLAY AGAIN", width / 2, height / 2 + 50);
}
function mousePressed() {
  if (gameState === "START") {
    gameState = "L1";
  } else if (gameState === "END") {
    // Reset game variables before restarting
    score = 0;
    ballsize = 40;
    ballx = 300;
    bally = 300;
    gameState = "L1";
  }
}
///level1
function levelOne(){
  fill(0);
text("Level 1",width/2,height-20);
  var distoball= dist(ballx,bally,mouseX,mouseY);
  if(distoball< ballsize/2){
    ballx=random(width);
    bally=random(height);
    score= score + 1;
  }
  if(score>=5){
   gameState = "L2";
     }
  var imgHeight = ballsize;
  var imgWidth= ballsize *(dotImg.width / dotImg.height);
  image(dotImg,ballx,bally,imgWidth, imgHeight);
   line(ballx,bally,mouseX,mouseY);
}//end of level one======================================================


function levelTwo(){
  background(200,100,0);
text("Level 2",width/2,height-20);
  var distoball= dist(ballx,bally,mouseX,mouseY);
  if(distoball< ballsize/2){
    ballx=random(width);
    bally=random(height);
    score= score + 1;
  }
  if(score>=10){
    gameState="L3";
    //background(random (255));
     }
  //(ballx,bally,mouseX,mouseY);
  var imgHeight = ballsize;
  var imgWidth= ballsize *(dotImg.width / dotImg.height);
  image(dotImg,ballx,bally,imgWidth, imgHeight);
}//end of level 2======================================================

 
function levelThree(){
  
  background(0,100,200);
  fill(0);
text("Level 3",width/2,height-20);

var angle = noise(t) * TWO_PI * 2;
var speed =5.5;
ballx += cos(angle)* speed;
bally += sin(angle)* speed;
t+=0.02;
var radius = ballsize /2;
ballx = constrain(ballx, radius, width - radius);
bally = constrain(bally, radius, height - radius);

var distoball = dist(ballx, bally, mouseX, mouseY);
if (distoball < ballsize /2){
  ballx = random(width);
  bally = random(height);
  score= score +1;
 
  }
  if(score>=15){
   gameState= "END"
     }
  var imgHeight = ballsize;
  var imgWidth= ballsize *(dotImg.width / dotImg.height);
  image(dotImg,ballx,bally,imgWidth, imgHeight);
  
  //line(ballx,bally,mouseX,mouseY);
  
}//end of level 3======================================================
