class Ground{
    constructor(x,y,w,h){
        var option = {
            isStatic:true

        }
        this.ground = Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.ground)
        this.image = loadImage("sprites/ground.png")
        this.width = w
        this.height = h
    }

    display(){
        imageMode(CENTER)
        var pos = this.ground.position
        fill("brown")
        image(this.image,pos.x,pos.y,this.width,this.height)

    }
}