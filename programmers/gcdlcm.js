// 나의 풀이
function solution(n, m) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

// 다른 사람의 풀이
function gcdlcm(a, b) {
  var r;
  for(var ab= a*b;r = a % b;a = b, b = r){}
  return [b, ab/b];
}

// consoel.log(solution(3, 12))
// [3, 12]
// consoel.log(solution(2, 5))
// [1, 10]
