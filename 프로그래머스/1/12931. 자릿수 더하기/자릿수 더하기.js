function solution(n) {
    
    let str = String(n);
    let answerArray = Array.from(str);
    let answer = 0;
    
    for(let i=0; i<answerArray.length; i++) {
        answer += Number(answerArray[i]);
    }
    
    return answer;
}