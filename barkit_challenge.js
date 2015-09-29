var _ = {};

_.containsAll = function(find, search){
  var found = {};

  for (var i=0; i<search.length; i++){
    found[search[i]] = true;
  }

  for (var x=0; x<find.length; x++){
    if (!found[find[x]]) return false; 
  }

  return true;
};

var dataToSearch = ['hey', 'sup', 'slug', 'barf'];
 
var shouldPass = ['hey', 'sup'];

var shouldFail = ['babooger'];

var shouldFail2 = ['hey', 'guuu'];

var result = _.containsAll(shouldPass, dataToSearch);
console.log('shouldPass:', result);
var result = _.containsAll(shouldFail, dataToSearch);
console.log('shouldFail:', result);
var result = _.containsAll(shouldFail2, dataToSearch);
console.log('shouldFail2:', result);


var BarKit = function(_cost, _Ingredients){
  this.cost = _cost;
  this.Ingredients = _Ingredients;
};

var BarKitStore = function(){
  this.kits = [];
};

BarKitStore.prototype.addKit = function(kit){
  this.kits.push(kit);
};

BarKitStore.prototype.allBarKits = function(){
  return this.kits;
};

BarKitStore.prototype.MakeShoppingList = function(targetIngredients){
  // return the cheapest barket combo 
  // whoops this totes has an edge case === noob moove  
  //
  // find kits with subset 
  var ingredientsInclude = [];
  for (var i=0; i< this.kits.length; i++){
    if (_.containsAll(targetIngredients, this.kits[i].Ingredients) {
      ingredientsInclude.push(this.kits[i]);
      
    }
  }
  var curmin;
  var curKit;
  for (var i=0; i<this.ingredientsInclude.length; i++){
    if (!curmin) { 
      curmin = this.kits[i].cost;
      curKit = this.kits[i];
    } else {
      if (this.kits[i].cost < curmin){
        curmin = this.kits[i].cost;
        curKit = this.kits[i];
      }
    }
  }
  return curKit;
};



var a = new BarKit( 11, ['slug', 'lemon', 'salt']);
var b = new BarKit( 100, ['salt', 'slug']);
var c = new BarKit( 1.3, ['lemon', 'slug']);

var BKS = new BarKitStore();
BKS.addKit(a);
BKS.addKit(b);
BKS.addKit(c);

console.log('allkits', BKS.allBarKits());
console.log('kit with lemon', BarKitStore

console.log(BKS);

