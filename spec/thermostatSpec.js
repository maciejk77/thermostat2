describe('Thermostat', function(){

  beforeEach(function() {
        thermostat = new Thermostat();
    });

  describe('can change temperature', function(){

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

  describe('can have max or min temperature', function(){

    it('cannot lower temperature below 10', function(){
      thermostat.temperature = 10;
      expect( function(){ thermostat.decrease(); }).toThrow(new Error("Min temperature is 10")); 


    });

  });

});