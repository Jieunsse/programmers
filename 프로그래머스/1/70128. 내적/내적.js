function solution(a, b) {    
    let answer = [];
    let number = 0;
    
    for(let i=0; i<a.length; i++) {
        answer[i] = a[i] * b[i];
    }
    
    for(let j=0; j<answer.length; j++) {
        number += answer[j];
    }
    
    return number;
}