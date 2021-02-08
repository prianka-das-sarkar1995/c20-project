var cat ,mouseImg,garden,catImg,mouseImg1,gardenImg;
function preload() {
    //load the images 
    gardenImg=loadAnimation("garden.png")
    catImg=loadAnimation("cat1.png")
    mouseImg1=loadAnimation("mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(400,400)
garden.addAnimation("g",gardenImg)
cat=createSprite(200,200,10,10)
cat.addAnimation("c",catImg)
cat.scale=0.05
mouseImg=createSprite(300,300,50,10)
mouseImg.addAnimation("m",mouseImg1)
mouseImg.scale=0.05



}

function draw() {

    background("pink");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
