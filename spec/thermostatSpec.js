describe('Thermostat', function(){

  beforeEach(function() {
        thermostat = new Thermostat();
    });

  describe('can change temperature,', function(){

    it('can have a default temperature', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('can increase temperature by 1', function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease temperature by 1', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it('can reset temperature to default', function(){
      thermostat.temperature = 28;
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });
  
  });

  describe('can have max or min temperature,', function(){

    it('cannot lower temperature below 10', function(){
      thermostat.temperature = 10;
      expect( function(){ thermostat.decrease(); }).toThrow(new Error("Min temperature is 10"));
    });

    it('allows max temp 25, when powersaving is on', function(){
      thermostat.powersaving = true;
      thermostat.temperature = 25;
      expect( function(){ thermostat.increase(); }).toThrow(new Error("Max 25 degrees in powersaving mode"));
    });

    it('allows max temp 35, when powersaving is off', function(){
      thermostat.powersaving = false;
      thermostat.temperature = 35;
      expect( function(){ thermostat.increase(); }).toThrow(new Error("Max 35 degrees if powersaving is off"));
    });

  });
  
  describe('changes color depending on the temperature,', function(){

    it('changes color to green, if temperature is lower than 18', function(){
      thermostat.temperature = 18;
      thermostat.decrease();
      thermostat.changeColor();
      expect(thermostat.tempColor).toEqual("Green");      
    });

    it('changes color to yellow, if temperature is between 18 and 25', function(){
      thermostat.temperature = 25;
      thermostat.decrease();
      thermostat.changeColor();
      expect(thermostat.tempColor).toEqual("Yellow"); 
    });

    it('changes color to red, if temperature is higher than 25', function(){
      thermostat.powersaving = false;
      thermostat.temperature = 25;
      thermostat.increase();
      thermostat.changeColor();
      expect(thermostat.tempColor).toEqual("Red"); 
    });
    
  });

});



