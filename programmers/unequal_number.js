// 나의 풀이
function solution(array) {
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      answer.push(array[i]);
    }
  }
  return answer;
}

// 다른사람의 풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

// 줄여보자.....
// 내장 메서드 사용을 해보자