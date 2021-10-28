// 나의 풀이
function solution (num) {
  var x = Math.floor(Math.sqrt(num));
  var testNumber = Math.pow(x, 2);

  return testNumber === num ? Math.pow(x + 1, 2) : -1;
}

// 다른사람의 풀이
function nextSqaure(n){
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
  return result;
}

// console.log(solution(121));
// 144
// console.log(solution(3));
// -1

// Number.isInteger : 주어진 값이 정수인지 확인
