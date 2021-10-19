// 내 풀이
function solution(num) {
  if (num % 2 === 0 || num === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 다른사람 풀이
function evenOrOdd(num) {
return num % 2 ? "Odd" : "Even";
}
// (==1) 홀수인지 아닌지의 질문이 암시된 조건문
// -2 %2 = -0 이 나오는데 -0은 falsy

// review: 삼항연산자써서 코드 길이를 줄이려는 노력하기
