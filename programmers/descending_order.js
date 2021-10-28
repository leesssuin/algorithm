// 나의 풀이
function solution (n) {
  var string = n.toString();

  return parseInt(string.split('').sort().reverse().join(''));
}

// 다른사람의 풀이
function solution(n) {
  var answer = "";
  n = n + "";
  var emptyArray = [];
  for (var i = 0; i < n.length; i++) {
      emptyArray.push(n[i]);
  }
  for (var j = 0; j < emptyArray.length; j++) {
      if (emptyArray[j] < emptyArray[j+1]) {
          var temp = emptyArray[j];
          emptyArray[j] = emptyArray[j+1];
          emptyArray[j+1] = temp;
          j = -1;
      }
  }
  for (var k = 0; k < emptyArray.length; k++) {
      answer += emptyArray[k];
  }
  answer = Number(answer);
  return answer;
}
