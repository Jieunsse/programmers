function solution(absolutes, signs) {
    var values = [];
    var answer = 0;
    
    for(let i=0; i<absolutes.length; i++) {
        if(signs[i] === true) {
            values[i] = absolutes[i];
        }
        if(signs[i] === false) {
            values[i] = absolutes[i] * -1;
        }
    }
    
    for(let j=0; j<values.length; j++) {
        answer += values[j];
    }
    
    return answer;   
}