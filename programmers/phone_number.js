// 첫 번째 풀이
function solution1(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 두 번쨰 풀이
function solution2(phone_number) {
  let result = '';
  const length = phone_number.length;

  for (let i = 0; i < length - 4; i++) {
    result += '*';
  }
  return result + phone_number.slice(-4);
}
