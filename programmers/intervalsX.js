// 나의 풀이

function solution (x, n) {
  let sum = 0;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(sum += x);
  }
  return result;
}

// 다른사람의 풀이
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

// x = 2, n = 5 return [2, 4, 6, 8, 10]
// x = 4, n = 3 return [4, 8, 12]
// x = -4, n = 2 return [-4, -8]

// 짧게 줄이는 연습 필요, 문제를 너무 일차원적으로 푸는것같은 느낌.....
