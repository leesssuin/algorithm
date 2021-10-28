// 나의 풀이
function solution (n) {
  var answer = [];
  var string = n.toString();

  for (let i = string.length - 1; i >= 0; i--) {
    answer.push(Number(string[i]));
  }
  return answer;
}

// 다른 사람의 풀이
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
