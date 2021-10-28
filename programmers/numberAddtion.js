// 나의 풀이
function solution (n) {
  var string = n.toString();
  var answer = 0;

  for (let i = 0; i < string.length; i++) {
    answer += parseInt(string[i]);
  }
  return answer;
}

// 다른사람의 풀이

function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
