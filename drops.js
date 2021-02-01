
class Drops{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.8,
            friction:1,
            density:1

        }

        this.x=x;
        this.y=y;
        this.radius=5;
        this.body = Bodies.circle(x,y,5, options);

        World.add(world, this.body);
       

    }

    updateY(){
        if(this.body.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})}
    
   }

    showDrop()
    {
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
         
    }

    


}
