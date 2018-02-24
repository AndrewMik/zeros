module.exports = function getZerosCount(number) {
  // your implementation
  var devider = 5, zeroCounter = 0;

  while (devider <= number){
    zeroCounter += Math.floor(number/devider);
    devider *= 5;
  }

  return zeroCounter;
}
