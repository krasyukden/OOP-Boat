"use strict";

function Boat (name, type){
	
	this._types = ["fishingBoat", "pilot", "sailing"];
	this._speed = 0;
	this._status = false;
	if(typeof name === "string" && name.length > 2){
		this._name = name;
	}
	
	//this._type = null;// ???
	
	this._types.forEach( (v) => {//общ код
		if(type == v){
			this._type = type;// если не => Cannot set property '_type' of undefined
		}
	})
}
Boat.prototype.getStatus = function(){
	return this._status;
}
Boat.prototype.on = function(){
	this._status = true;
}
Boat.prototype.off = function(){
	this._status = false;
}


Boat.prototype.getType = function (){
	return this._type;
}

Boat.prototype.getName = function (){
	return this._name;
}

/*Boat.prototype._isCorType = function (type){//общ код вынести - не работ!
	//this._type = null;
	  this._types.forEach( (v) => {
		 if(type == v){
			//console.log(1);
			return true;// если не => Cannot set property '_type' of undefined
		}
		
		else{
			return false;
		}
	})
}
  
Boat.prototype.setType = function (type){
	
	if(this._isCorType(type)){// c true - ok
		this._type = type;
	}
	
}*/

Boat.prototype.setType = function (t){
	//this._type = null;
	this._types.forEach( (v) => {
		if(t == v){
			this._type = t;// если не => Cannot set property '_type' of undefined
		}
	})
}

Boat.prototype.increaseSpeed = function (){
	if(this._speed <= 4){
		this._speed++;
	}
}

Boat.prototype.decreaseSpeed = function (){
	if(this._speed > 0){
		this._speed--;
	}
}

Boat.prototype.setSpeed = function(value){
	if(typeof value === "number" && !isNaN(value) && 0 <= value && value <= 5){
		this._speed = value;
	}
}

Boat.prototype.getSpeed = function(){
	return this._speed;
}

// Наследник //Launch - катер

function Launch (name, type){
	Boat.call(this, name, type);
	this._types = ["jetski", "launch"];
	this._levelPetrol = 0;
	this._types.forEach( (v) => {//общ код
		if(type == v){
			this._type = type;// если не => Cannot set property '_type' of undefined
		}
	})
}
Launch.prototype = Object.create(Boat.prototype);
Launch.prototype.constructor = Launch;

Launch.prototype.on = function(){// полиморфизм расшир // !!!!!!
	
	if (this._levelPetrol >= 1){
		Boat.prototype.on.call(this);
		//this._status = true;
	}	
}
Launch.prototype.setPetrol = function(level){
	if(typeof level === "number" && !isNaN(level) && 0 < level && level <= 40){
		this._levelPetrol = level;
	}	
}
Launch.prototype.getOil = function(){
	return this._levelPetrol;
}	

Launch.prototype.increaseSpeed = function (){// полиморфизм
	if(this._speed <= 15){
		this._speed++;
	}
}
Launch.prototype.setSpeed = function(value){// полиморфизм
	if(typeof value === "number" && !isNaN(value) && 0 <= value && value <= 15){
		this._speed = value;
	}
}
	
var sailing = new Boat("Rose", "fishingBoat");
var launch = new Launch("Medusa", "launch");

sailing.on();
console.log(sailing.getStatus());
console.log(sailing.getName());
console.log(sailing.getType());
sailing.setType("pilot");
console.log(sailing.getType());
sailing.setSpeed(2);
console.log(sailing.getSpeed());
sailing.increaseSpeed();
sailing.increaseSpeed();
sailing.decreaseSpeed();
console.log(sailing.getSpeed());
sailing.off();
console.log(sailing.getStatus());
launch.on();
console.log(launch.getStatus());
console.log(launch.getName());
console.log(launch.getType());
launch.setType("jetski");
console.log(launch.getType());
launch.setSpeed(4);
launch.increaseSpeed();
launch.increaseSpeed();
launch.decreaseSpeed();
console.log(launch.getSpeed());
console.log(launch.getStatus());
launch.setPetrol(35);
console.log(launch.getOil());
launch.on();
console.log(launch.getStatus());
launch.off();
console.log(launch.getStatus());