// 내 코드
function solution(s) {
    return s.split(' ').map(word => {
        let answer = '';

        for (let i = 0; i < word.length; i++) {
            if (i % 2) {
                answer += word[i].toLowerCase();
            } else {
                answer += word[i].toUpperCase();
            }
        }

        return answer;
    }).join(' ');
}  

// 다른 사람 코드
function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
  }
  