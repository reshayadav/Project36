class Food{
    constructor(foodStock,lastFed){

    
     
        this.image= loadImage("../images/Milk.png");
      

    }

    display(){
      
     var x=80,y=100;

     imageMode (CENTER);
     image(this.image,720,220,70,70);

     if(this.foodStock!=0){
       for(var i=0; i<this.foodStock; i++){
         if(i%10===0){
           x=80;
           y=y +50;
         }
         this.image(this.image,x,y,50,50);
         x=x=30;
       }
     }
      

      
    }
    getFoodStock(){
      var foodRef = database.ref('food');
    foodRef.on("value",(data)=>{
      food = data.val();
    })
    }

    updateFoodStock(count){
      database.ref('/').update({
        food : count
      });
    }

    deductFood(){
        
    }
}