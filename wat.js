var dude = {
  name: 'len',
  hp: 32,
  items: [],
  armor: [],
  shiled: 0,
  eqiped: null, 
  atkdmg: 1,
  arm: function(weapon){
    this.eqiped = weapon;
    this.atkdmg += weapon.atkdmg || 0;
  }
};

var swordOfGulnok = {
  name: 'sword of gulmock +2',
  atkdmg: 2,
};

var badGuy = {
  name: 'rat',
  hp: 3,
  atkdmg: 0.5
};


console.log('dude', dude);
dude.arm(swordOfGulnok);

console.log('dude with sword', dude);

console.log('dude encounters rat');

console.log('rat bites dude');
dude.hp -= badGuy.atkdmg;

console.log('dude hp:', dude.hp);
