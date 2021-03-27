 class Chain {
 constructor(bodyA ,bodyB){
    var options={
        bodyA:bird.body,
        bodyB:log7.body,
        stiffness:0.04,
        length:10
        
        }
        
       
     this.bodyA=bodyA;
     this.bodyB=bodyB;

        
        this.chain=Constraint.create(options);
        
        World.add(world,this.chain);


 }



display(){

    strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)






}
 }