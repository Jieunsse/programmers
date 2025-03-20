function solution(s) {
    let answer = [];
    let array = s.split('');
    
    
    if(s.length % 2 !== 0) {
        answer[0] = array[(s.length - 1) / 2];
    }
    
    if(s.length % 2 === 0) {
        answer[0] = array[s.length / 2 - 1];
        answer[1] = array[s.length / 2];
    }
    
    return answer.join('');
}