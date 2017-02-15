//1
function removeElementFromArray(arr) {
  var args = Array.prototype.slice.call(arguments); //args [[1, 2, 3, 1, 2, 3], 2, 3]
  args.splice(0, 1); //args [2,3]
  return arr.filter(function(element) { //element 1, 2, 3, 1, 2, 3
    return args.indexOf(element) === -1; 
  });
}
removeElementFromArray([1, 2, 3, 1, 2, 3], 2, 3);
//2
function removeElementFromArray(arr) {
  var args = [].slice.call(arguments, 1);
  return arr.filter(function(v){
    return args.indexOf(v) < 0;
  });
};

