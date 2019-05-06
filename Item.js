class Item extends Object{
	constructor(type,container,src,x,y,width,height,velX,velY,bg){
		super(type,container,src,x,y,width,height,velX,velY,bg);
		this.point=0;
		this.speed=0;
		
		if(this.src="./item0.png"){
			this.point=20;
			this.speed=0;
		}else if(this.src="./item1.png"){
			this.point=30;
			this.speed=0;
		}else if(this.src="./item2.png"){
			this.point=40;
			this.speed=3;
		}else if(this.src="./item3.png"){
			this.point=50;
			this.speed=5;
		}
		

	}
	tick(){
		for(var i=0; i<objectManager.objectArray.length;i++){
				var obj=objectManager.objectArray[i];
				if(obj.type=="STONE"){
					 if(collisionCheck(this, obj)){
						objectManager.removeObject(obj);
						stoneNum--;
					 }
				}
		}
	}
}