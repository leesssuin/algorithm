// 나의 풀이
function solution1(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i ++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j]
    }
  }
  return answer;
}

// 다른 사람의 풀이
function solution2 (arr1, arr2) {
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
