// 나의 풀이 1
function solution (num) {
  let count = 0;

  while (num !== 1) {
    if (count > 500) {
      return -1;
    } else {
      num = num % 2 === 0 ? num / 2 : (3 * num) + 1 ;
    }
    count++;
  }
  return count;
}

// 줄여보았다
function solution2(num) {
  let count = 0;

  while (num !== 1 && count < 500) {
    num = num % 2 === 0 ? num / 2 : (num * 3) + 1;
    count++;
  }
  count = num === 1 ? count : -1;
  return count;
}

// 다른 사람의 풀이
function collatz(num,count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

// num = 6 result = 8
// num = 16 result = 4
// num= = 626331 result = -1