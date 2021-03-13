class Ball{
    constructor(x,y,r){
        var options = {
            isStatic : true
        }
    this.body = Bodies.circle(x,y,r,options)
    this.radius = r
    World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(x,y,this.radius)
        pop()
    }


}