class Slingshot{
    constructor(b1,pointB){
        var options = {
            bodyA:b1,
        pointB:pointB,
    length:10,
    stiffness:0.04,
        }
        this.pointB=pointB
       this.chain = Constraint.create(options)
        World.add(world,this.chain)   
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            strokeWeight(15);
            stroke("orange");
            line(pointA.x,pointA.y,pointB.x,pointB.y) 
        }
            
    }
    fly(){
        this.chain.bodyA=null
    }
}