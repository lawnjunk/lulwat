var EE = require('events').EventEmitter;

var bmpEmitr = new EE();

bmpEmitr.on('foundBMPHeader', function(name, wat){
  console.log('sup ' + name + ' ' + wat);
});

bmpEmitr.emit('foundBMPHeader', 'doug', 'yolo');
