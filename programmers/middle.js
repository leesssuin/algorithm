//가운데 글자 가져오기
//나의 풀이
function solution(s) {
  var answer = '';
  var a = s.length / 2;
  if(s.length % 2 === 0 ) {
      return s[a - 1] + s[a];
  }
  else {
      return s[a - 0.5];
  }
  return answer;
}

//다른 사람의 풀이1
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//다른 사람의 풀이2
function solution(s) {
  const mid = Math.floor(s.length/2);
  return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}
