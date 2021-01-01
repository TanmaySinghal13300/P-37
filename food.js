class Food {
    constructor() {
      
      this.foodStock=0,this.lastfed
      this.image = loadImage("Milk.png");

    }

    updateFoodStock(foodStock){
      this.foodStock=foodStock;
    }
    deductFood(){
    if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
    }
    }
    getFoodStock(){
      return this.foodStock;
    }
    getFedTime(lastFed){
      this.lastFed=lastFed
    }

    bedRoom(){
      background(bedRoom,550,500);
    }
    garden(){
      background(garden,550,500);
    }
    washroom(){
      background(washRoom,550,500);
    }
    
    display(){
      var x=80,y=100;
      imageMode(CENTER)
     if(this.foodStock!=0){
       for(var i=0;i<this.foodStock;i++){
         if(i%10==0){
           x=80
           y=y+50;

         }
         image(this.image,x,y,50,50);
         x=x+30
       }
     }
    }
  };
  