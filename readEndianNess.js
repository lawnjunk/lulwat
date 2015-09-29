var endianness = require('os').endianness();

var read8 = Buffer.prototype.readUInt8;
var read16 = Buffer.prototype['readUInt16' + endianness];
var read32 = Buffer.prototype['readUInt32' + endianness];

var readNumber = function(buf, readFunc, offset){
  buf.readFunc = readFunc;
  var result = buf.readFunc(offset);
  delete buf.readFunc;
  return result;
};

var buf = new Buffer('\0a buf thing hello world');

console.log(readNumber(buf, read16, 0));

