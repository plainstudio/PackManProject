/*유령을 정의한다*/
class Enemy extends Object{
	constructor(type,container,src,x,y,width,height,velX,velY,bg){
		super(type,container,src,x,y,width,height,velX,velY,bg);
		//this.count=0;
		this.a=0.1;
	
		this.sensorArray=[];
		
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
		var hitCount=[0,0,0,0];

		for(var i=0; i<objectManager.objectArray.length;i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="BLOCK"){
				//console.log("블락발견");
				for(var a=0;a<this.sensorArray.length;a++){
					var s=this.sensorArray[a];
					
					if(hitTest(obj , s, this.velX, this.velY)){ //충돌이라면...
						hitCount[a]++;
						//console.log(hitCount , "충돌 , rankey = ", rankey);
					}
				}
			}
		}
		
		//센서가 블록에 닿으면 
		if(hitCount[0] > 0  || hitCount[1] >0){//좌, 우 가 닿으면
			this.velX=-this.velX;
		}
		if(hitCount[2] > 0 || hitCount[3] > 0){//위, 아래가 닿으면 
			this.velY=-this.velY;
		}

		this.x+=this.velX;
		this.y+=this.velY;

		//주인공 따라다니기
		//this.x+=	this.x+(hero.x-this.x);
		//this.y+=	this.y+(hero.y-this.y);
		//java 시간으로 미뤄서 1. 멈추게 하기 2. 팩맨 위치 얻어내기 3. 적군 위치보다 +,- 계산해서
		//이동방향 정하기, 이동하기, 부딪히면 멈추기.. 반복



		//센서 tick,render 호출
		for(var i=0;i<this.sensorArray.length;i++){
			var sensor=this.sensorArray[i];
			//console.log(i+"센서 위치 ", sensor.x, sensor.y);
			sensor.tick( sensor.x + this.velX , sensor.y + this.velY);
			sensor.render();
		}
		
		//화면 넘어가면 반대편에서 나오기
		/*if(this.x>=560){
			this.x=0;
		}else if(this.x<=0){
			this.x=580;
		}else if(this.y>=560){
			this.y=0;
		}else if(this.y<=0){
			this.y=580;
		}
		this.x+=this.velX;
		this.y+=this.velY;
		*/

	}
	
	 removeSensor(){//센서 삭제
		var len=this.sensorArray.length;
		console.log(len ,"개 지울께요")
		for(var a=0; a<len;a++){
			var obj2 = this.sensorArray[0];
			stage.removeChild(obj2.div);//div 조심
			this.sensorArray.splice(0,1);
		}
	  }
}