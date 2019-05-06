class Sensor extends Object{
	constructor(type,container,src,json,velX,velY,bg){
		super(type,container,src, json.x, json.y, json.width , json.height,velX,velY,bg);

		this.div.style.border="none";
	}
		tick(x, y){
		this.x=x;
		this.y=y;
	}
}