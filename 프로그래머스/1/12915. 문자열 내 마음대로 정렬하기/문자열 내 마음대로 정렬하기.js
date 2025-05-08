function solution(strings, n) {
    // 배열을 순회하며 각 원소의 n번째 글자에 접근
    // 그 글자들을 오름차순으로 판별
    // 오름차순에 맞게 단어 재배치
    
    let words = [];
    let answer = [];
    
    for (let i=0; i<strings.length; i++) {
        words.push([strings[i], strings[i][n]]);
    }
    
    words.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return a[1].localeCompare(b[1]);
    });
    
    for (let i=0; i<words.length; i++) {
        answer.push(words[i][0]);
    }
    
    return answer;
}