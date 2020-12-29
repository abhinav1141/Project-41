class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.r=5;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image=loadImage("walking_1.png");
    
    }
    display(){
        image(this.image,1,1,this.body.position.x,this.body.position.y);
        ellipse(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}
