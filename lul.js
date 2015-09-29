var powers = function(){
  this.canSlam = true;
  this.canCrush = false;
  this.hype = function(){
    this.name && console.log('I ' + this.name + ' will destroy you');
  };
};

var CatStuff = function(name){
  powers.call(this);
  this.name = name || 'kitty';
  this.canCrush = true;
  this.sayMeow  = function(){
    console.log('meaw slug');
  };
};

var DogStuff = function(name){
  powers.call(this);
  this.name = name || 'pupslug';
};

powers.prototype.slamer = function(){
  if (this.canSlam){
    console.log('you have envoked the ' + this.name + ' slammer');
  }
};

powers.prototype.crusher = function(){
  if (this.canCrush){
    console.log('you have envoked the ' + this.name + ' cursher');
  }
};


CatStuff.prototype = Object.create(powers.prototype);
DogStuff.prototype = Object.create(powers.prototype);

exports.Cat = CatStuff;
exports.Dog = DogStuff;
