// 나의 풀이
function solution(arr, divisor) {
  const answer = [];
  
  arr.map(x => x % divisor === 0 && answer.push(x));
  return answer.length > 0 ? answer.sort((a, b) => (a - b)) : [-1];
}

//다른 사람의 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

// solution([5, 9, 7, 10], 5)
// [5, 10]
// solution([2, 36, 1, 3], 1)
// [1, 2, 3, 36]
// solution([3, 2, 6], 10)
// [-1]
