class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

      this.offsetX=offsetX;
      this.offsetY=offsetY;

       var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY}
       }

       this.rope=Constraint.create(options);
       World.add(world,this.rope);
    }

    display(){
      var posA=this.rope.bodyA.position;
      var posB=this.rope.bodyB.position;
      var a1=posA.x;
      var a2=posA.y;
      var a3=posB.x+this.offsetX;
      var a4=posB.y+this.offsetY;
      strokeWeight(4);
      line(a1,a2,a3,a4);
    }
}