var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  this.temperature ++
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

