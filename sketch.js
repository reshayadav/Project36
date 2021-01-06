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

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
 
  
  foodObj = new Food(220,320,70,70);
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);


foodObj.display();


  drawSprites();

 
   
fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + " PM", 350,30);
 }else if(lastFed==0){
   text("Last Feed : 12 AM",350,30);
 }else{
   text("Last Feed : "+ lastFed + " AM", 350,30);
 }

}

function writeStock(x){
 

  if(x <= 0){
    x=0;
  }

  else{
    x=x -1;
  }

  database.ref("/").update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
  foodObj.foodStock = foodS;
}
function feedDog(){
  dog.addImage(happyImg);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
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
