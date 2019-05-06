/*
이 객체는 게임에 등장하거나, 제거될 객체들을 전담해서 관리해주는 객체다!
예) 주인공이 태어나면 이 객체에 등록을 의뢰하면 알아서 등장시킴
예) 총알이 적군과 마주치면, 이 객체에 삭제를 의뢰하면 알아서 하차시킴
*/

class ObjectManager{
	constructor(){
		this.objectArray=[];
	}
	addObject(obj){
			this.objectArray.push(obj);
	}
	removeObject(obj){
			obj.container.removeChild(obj.div); //stage대신에! 넘어온 객체의  container
			this.objectArray.splice(this.objectArray.indexOf(obj),1);
	}
	tick(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].render();
		}
	}
}