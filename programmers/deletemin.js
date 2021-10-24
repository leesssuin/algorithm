function solution(array) {
  var min = Math.min.apply(null, array);
  array.splice(array.indexOf(min), 1);
  return array.length ? array : [-1];
}

// var array = [4,3,2,1]
// return = [4,3,2]

// var array = [10]
// return = [-1]
