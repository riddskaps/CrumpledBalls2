class Wall{
    constructor(x,y){
    
     var options={
       isStatic:true
     }
      this.image=loadImage("dustbin.png")
      this.body=Bodies.rectangle(x,y,200,213,options)
      this.width=200
      this.height=213
      World.add(world,this.body)
    }
 display(){
   push();
   translate(this.body.position.x,this.body.position.y);
   imageMode(CENTER)
   image(this.image,0,0,this.width,this.height)
   //fill("green")
   //rect(0,0,this.width,this.height)
   pop();
 }
 }