var dog,sadDog,happyDog;
var feedD , addF , foodObj

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  fi = loadImage("Images/Milk.png")
  bg =loadImage("backyard-png-1.png")
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

  dog=createSprite(800,300,150,150);
  dog.addImage(sadDog);
  dog.scale=0.2;

  feedD= createButton(" FEED THE DOG ")
  feedD.position(250,190);
  feedD.mousePressed(feedDog)
  feedD.mouseReleased(feed2)
  //feedD.mosePressed(deductFood)
  
  addF=createButton(" ADD FOOD ")
  addF.position(400,190);
  addF.mousePressed(addFood)

  bottle = createSprite(700,340,50,50);
  bottle.addImage(fi);
  bottle.scale = 0.065;
  bottle.visible = false;
  inp1 = createInput("Your pet's name here");
  inp1.position(1020,200);

  food1 = new food()
 foodStock = database.ref('food');
  foodStock.on("value",readStock);

}

function draw() {
  background(bg);
food1.display();
push()
textSize(40)
stroke("black")
strokeWeight(4)
fill("yellow")
text("FEED THE DOG", 360,60)
pop()













  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

function readStock(data) {
  foodS = data.val();
  food1.updateFood(foodS);
}

function addFood(){
  foodS = foodS + 1;
  database.ref('/').update({
    Food:foodS
  })

}
function feedDog(){
dog.addImage(happyDog)
bottle.visible=true
foodObj.updateFood(foodObj.getFoodStock() - 1);

if (foodStock != 0) {
  bottle.visible = true;
}
}

function feed2(){
  dog.addImage(sadDog)
  bottle.visible=false

}



