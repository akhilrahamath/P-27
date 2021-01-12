class Bob{
    constructor(x,y,r){
       var options={
           isStatic:false,
           restitution:1.5,
           friction:0.5,
           density:1.2,
       }
       this.body=Bodies.circle(x,y,r/2,options)
       this.r=r;
       World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        stroke("red");
        strokeWeight(3);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r)
        pop();
    }
}