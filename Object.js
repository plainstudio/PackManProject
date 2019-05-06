class Object{
	constructor(type,container,src,x,y,width,height,velX,velY,bg){
		this.type=type;
		this.container=container;
		this.src=src;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.bg=bg;

		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.bg;
		this.div.style.border=1+"px solid red";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		
		if(this.src!=""){
			this.img=document.createElement("img");
			this.img.src=this.src;
			this.img.style.width=this.width+"px";
			this.img.style.height=this.height+"px";
			this.div.style.border="none";

			this.div.appendChild(this.img);
		}
		this.container.appendChild(this.div);
	}
	tick(){
			this.x+=this.velX;
			this.y+=this.velY;
	}
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}