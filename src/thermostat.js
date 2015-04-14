var Thermostat = function(){
  this.temperature = 20;
  this.powersaving = true;
  this.tempColor = "Green";
};

Thermostat.prototype.increase = function() {
  this.temperature ++
  if(this.powersaving === true && this.temperature > 25){
    throw new Error("Max 25 degrees in powersaving mode");
  };
  if(this.powersaving === false && this.temperature > 35){
    throw new Error("Max 35 degrees if powersaving is off");
  };
};

Thermostat.prototype.decrease = function() {
  this.temperature --
  if(this.temperature < 10){
    throw new Error("Min temperature is 10");
  };
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.changeColor = function() {
  if(this.temperature < 18){
    this.tempColor = "Green";
  };
  // if((this.temperature) >= 18) || (this.temperature) <= 25) {
  //   this.tempColor = "Yellow";
  // };
  // if(this.temperature > 25){
  //   this.tempColor = "Red";
  // };
};