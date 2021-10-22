// 나의 풀이

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {    // 데이터를 받아와서
    const n = data.split(" ");        // 배열로
    const a = Number(n[0]), b = Number(n[1]);   // 숫자로 치환
    const row = '*'.repeat(a);

    for (let i = 0; i < b; i++) {
        console.log(row);
    }
});

// 다른사람의 풀이

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(var i=0; i<b; i++){
        var temp = ''
        for(var j=0; j<a; j++)
            temp += '*'
        console.log(temp)
    }
});
