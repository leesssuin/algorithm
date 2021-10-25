// 나의 풀애

function solution (x) {
  var sum = 0;
  var array = String(x).split('');

  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  return (x % sum === 0);
}

// 다른 사람의 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

// x 값에 + "" 으로 string으로 바꿔줄 수 있다는거
// reduce로 sum 값 도출 할 수 있다는 거 확인!
