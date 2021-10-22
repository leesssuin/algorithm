// 나의 풀이

function solution(array) {
  return array.reduce((prev, curr) => prev + curr) / array.length;
}

// 다른 사람의 풀이

function average(array){
  var sum = 0;
  for(var value of array){
    sum += value;
  }
  return sum/array.length;
}

// var arr = [1,2,3,4];
// 2.5
