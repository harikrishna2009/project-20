var bgImg
var catImage,cat,catImage2,catRunning,catHappy,catImg3
var mouseImg2,mouseTeasing,mouse,mouseHappy,mouseimg3
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImage = loadImage("images/cat1.png")
    mouseImage = loadImage("images/mouse1.png")
    mouseImg2 = loadImage("images/mouse2.png","images/mouse3.png")
    catImage2 = loadImage("images/cat2.png","images/cat3.png")
    catImg3 = loadImage("images/cat4.png")
    mouseImg3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    cat = createSprite(800,800,20,20)
    cat.addAnimation("cat",catImage)
    cat.scale = 0.1

    mouse = createSprite(200,800,20,20)
    mouse.addAnimation("mouse",mouseImage)
    mouse.scale = 0.1

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.addAnimation("catHappy",catImg3)
        cat.changeAnimation("catHappy")
        cat.velocityX = 0
       // cat.x = cat.x - 600
       mouse.addAnimation("mouseHappy",mouseImg3)
       mouse.changeAnimation("mouseHappy")
    }


    drawSprites();  
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 50;
  }

  if (keyCode === LEFT_ARROW){
      cat.addAnimation("catRunning",catImage2)
      cat.changeAnimation("catRunning")
      cat.velocityX = -2

  }


}
