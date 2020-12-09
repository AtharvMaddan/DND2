class Dustbin{
	constructor(x,y,width,height){
		this.image = loadImage("dustbingreen.png")
		var options = {
			isStatic : true
		}
		this.width = width
		this.height = height
		this.body = Bodies.rectangle(x,y,this.width,this.height,options)
		World.add(world,this.body)
	}
	display(){
		var pos = this.body.position
		push()
		translate(pos.x,pos.y)
		rect(0,0,this.width,this.height)
		pop()
	}
}