//서울에서 김서방 찾기
//나의 풀이

function solution(seoul) {
  for(let i = 0; i < seoul.length; i ++) {
      if(seoul[i] === "Kim") {
          return '김서방은 ' + [i] +'에 있다'
      }
  }
}

//다른 사람들의 풀이
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
