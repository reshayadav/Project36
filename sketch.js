//Create variables here
var dog, happydog;
var dogImg, happyImg;
var foodS, foodStock;
var database;
var milk=[];
var foodObj;
var feedTime , lastFed;
var feed , addFood;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(900 ,500);
  
  database = firebase.database();
 
  dog = createSprite(700,250);
  dog.scale = 0.3;
  dog.addImage(dogImg);
 

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createElement("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
 
  
  // foodStock = database.ref("food");
  // foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);





  drawSprites();

  //add styles here
   textSize(15);
   fill (255);
   stroke (2);
   text("Note:  Press UP_ARROW Key To Feed The Dog", 30,30);

}

// function writeStock(x){
 

//   if(x <= 0){
//     x=0;
//   }

//   else{
//     x=x -1;
//   }

//   database.ref("/").update({
//     food:x
//   })
// }


// function readStock(data){
//   foodS = data.val();

// }

function feedDog(){
  dog.addImage(happyImg);

  Food.updateFoodStock(Food.getFoodStock()-1);
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    feedTime : hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}