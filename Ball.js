class Ball extends Object{
	constructor(type,container,src,x,y,width,height,velX,velY,bg){
		super(type,container,src,x,y,width,height,velX,velY,bg);
	}
	tick(){
		this.x+=this.velX;
		this.y+=this.velY;
		
		var hitCount=0;

		//������ �浹�ϸ� �����
		for(var i=0; i<objectManager.objectArray.length;i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="ENEMY"){
				if(collisionCheck(this, obj)){
					objectManager.removeObject(obj);
					enemyNum--;
					objectManager.removeObject(this);
					hitCount++;
				}
			}
			//��ϰ� �浹�ϸ� �Ѿ˸� �����
			if(obj.type=="BLOCK"){
				if(collisionCheck(this, obj)){
					objectManager.removeObject(this);
					hitCount++;
				}
			}
		}
		
		/*
		if(hitCount==0){
			//������ ������ ���� ���, ȭ�� ������ ������ ����
			if(this.x+this.width > 600 ){
				objectManager.removeObject(this);
			}if(this.x+this.width <= 0 ){
				objectManager.removeObject(this);
			}if(this.y+this.height > 600 ){
				objectManager.removeObject(this);
			}if(this.y+this.height <= 0 ){
				objectManager.removeObject(this);
			}
		}
		*/
	}
}