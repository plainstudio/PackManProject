class Block extends Object{
	constructor(type,container,src,x,y,width,height,velX,velY,bg){
		super(type,container,src,x,y,width,height,velX,velY,bg);
		
		this.div.style.float="left";
		this.div.style.border=1+"px solid yellow";
	}



}