process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" "); // 사용자가 입력한 문자열을 공백 기준으로 나누기.
    const width = Number(input[0]), height = Number(input[1]); // 각각 숫자 5, 3
    
    let stars = '*'.repeat(width);
    
    for (let i=0; i<height; i++) {
        console.log(stars);
    }
});