//Create variables here
var database,foodstock,dog,happyDog,sadDog
function preload()
{
	//load images here
  sadDog=loadImage("images/happydog.png")
happyDog=loadImage("images/Dog.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
dog=createSprite(250,300,150.150)
dog.addImage(sadDog)
dog.scale=0.15
var ref=database.ref("food")
ref.on("value",readStock)
}
function readStock(data){
 foodstock= data.val()
}

function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodstock)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here
fill(255,255,255)
stroke("black")
text("foodremaining:"+foodstock,170,200)


}
function writeStock(x){
  if(x<=0){
    x=0
  }
else{
  x=x-1
}
database.ref("/").update({
  food:x
})
}


