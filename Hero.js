/*팩맨을 정의하자*/
class Hero extends Object{
	constructor(type,container,src,x,y,width,height,velX,velY,bg){
		super(type,container,src,x,y,width,height,velX,velY,bg);
		this.count=0;

		this.enemyHitCount=0;
		this.len;
		this.i;
		this.sensor;

			
		/*------------------------------------------------------------
		센서들을 배열에 담아놓는다
		------------------------------------------------------------*/
		this.sensorArray=[];

		/*------------------------------------------------------------
		센서들을 배치한다
		------------------------------------------------------------*/
		this.leftSensor=new Sensor("SENSOR", container,"", getSensorSize("LEFT",this.x, this.y, this.width, this.height) , 0, 0, "");
		this.rightSensor=new Sensor("SENSOR", container,"", getSensorSize("RIGHT",this.x, this.y, this.width, this.height) , 0, 0, "");
		this.upSensor=new Sensor("SENSOR", container,"", getSensorSize("UP",this.x, this.y, this.width, this.height) , 0, 0, "");
		this.downSensor=new Sensor("SENSOR", container,"", getSensorSize("DOWN",this.x, this.y, this.width, this.height) , 0, 0, "");

		this.sensorArray.push(this.leftSensor);
		this.sensorArray.push(this.rightSensor);
		this.sensorArray.push(this.upSensor);
		this.sensorArray.push(this.downSensor);
	}

	tick(){
		
		/*------------------------------------------------------------
		충돌체크
		------------------------------------------------------------*/
		var hitCount=[0,0,0,0]; //0:left, 1:right, 2:up, 3:down
		//var stopX=0;
		//var stopY=0;

		for(var i=0;i<objectManager.objectArray.length;i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="BLOCK"){
				/*------------------------------------------------------
				블럭 하나를 대상으로 4방향의 센서들과 대조해본다
				------------------------------------------------------*/
				for(var a=0;a<this.sensorArray.length;a++){
					var s=this.sensorArray[a];
					
					if(hitTest(obj , s, this.velX, this.velY)){ //충돌이라면...
						hitCount[a]++;
						//console.log(hitCount , "충돌");
						//stopX=obj.x;
						//stopY=obj.y;
					}						
				}
			}
		}

		/*---------------------------------------------------------------------------------------------------
		주인공의 벽에 닿으면 속도를 중지시킨다.
		★★★ 매우중요) 특히 && 조건을 부여하여 , 원할때는 이 조건을 빠져나올 수 있는 여지를 만든다
		---------------------------------------------------------------------------------------------------*/
		if(hitCount[0] > 0 && prekey==37){//좌측이 닿으면
			this.velX=0;
		}
		if(hitCount[1] > 0 && prekey==39){//우측이 닿으면
			this.velX=0;
		}
		if(hitCount[2] > 0 && prekey==38){//상단이 닿으면 
			this.velY=0;
		}
		if(hitCount[3] > 0 && prekey==40){//하단이 닿으면
			this.velY=0;
		}
		
		this.x+=this.velX;
		this.y+=this.velY;
		/*--------------------------------------------------------------
		센서는 move 메서드로 구현했다
		오브젝트 메니져에 등록하지 않았으므로, render() 를 여기서 호출해준다
		------------------------------------------------------------*/
		for(var i=0;i<this.sensorArray.length;i++){
			var sensor=this.sensorArray[i];
			//console.log(i+"센서 위치 ", sensor.x, sensor.y);
			sensor.tick( sensor.x + this.velX , sensor.y + this.velY);
			sensor.render();
		}

		///// 스톤과 부딪혔을때
		//this.enemyHitCount=0;
		var hitEnemy;

		for(var i=0; i<objectManager.objectArray.length;i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="STONE"){
				 if(collisionCheck(this, obj)){
					objectManager.removeObject(obj);//삭제 의뢰...
					stoneNum--;
					stoneCheck();
					score+=point;
					setInfo();
				 }

			}if(obj.type=="ITEM"){
				if(collisionCheck(this, obj)){
					objectManager.removeObject(obj);
					//hero.velX=obj.speed;
					score+=obj.point;
					setInfo();
				 }
			}
			

			if(obj.type=="ENEMY"){
				if(collisionCheck(this, obj)){

					
					console.log("적군이랑 닿았어요 ㅜㅜ");
					hitEnemy=obj;
					this.enemyHitCount++;
					enemyNum--;
					life--;

					objectManager.removeObject(hitEnemy);
					enemyCheck();
					hitEnemy.removeSensor();

					
				}

			}
		}
		//닿은게 있다면 이제 처리...
		if(this.enemyHitCount >=4){
	

			//센서 옮기기 
			this.len=this.sensorArray.length;
			for(this.i=0;this.i<this.len;this.i++){
				
				this.sensor=this.sensorArray[0];
				stage.removeChild(this.sensor.div);
				this.sensorArray.splice(0,1);
			}

			//센서 옮기기
			/*
			var len=this.sensorArray.length;
			for(var i=0;i<len;i++){
				var sensor=this.sensorArray[0];
				//console.log(i+"센서 위치 ", sensor.x, sensor.y);
				stage.removeChild(sensor.div);
				this.sensorArray.splice(0,1);
			}*/

			objectManager.removeObject(this);
			/*objectManager.removeObject(hitEnemy);
			enemyCheck();
			hitEnemy.removeSensor();
			*/
		}
	}
	
}