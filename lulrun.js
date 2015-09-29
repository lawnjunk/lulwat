var animals = require('./lul.js');

var cat = new animals.Cat('mean meow');
var dog = new animals.Dog('hank the cow dog');

cat.hype();
cat.sayMeow();
dog.hype();

cat.slamer();
dog.slamer();

dog.canCrush = true;
dog.crusher();

cat.crusher();;

