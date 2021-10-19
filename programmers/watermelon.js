//수박수박수박수
//나의 풀이
function solution(n) {
  var answer = '';

  for (var i=1; i<=n; i++){
      if(i%2===0){
          answer += '박';
      }else{
          answer += '수';
      }
  }

  return answer;
}

//다른 사람의 풀이1
const waterMelon = n => {
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

//다른 사람의 풀이2
const waterMelon = n => "수박".repeat(n).slice(0,n);
