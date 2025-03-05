function solution(ineq, eq, n, m) {
    var answer = 0;
    
    // 1 > 10
    // 10 > 1
    
    if(ineq === '>' && eq === '=') {
        if(n >= m) {
            answer = 1;
        } else answer = 0;
    }
    
    if(ineq === '>' && eq === '!') {
        if(n > m) {
            answer = 1;
        } else answer = 0;
    }
    
    if(ineq === '<' && eq === '=') {
        if(n <= m) {
            answer = 1;
        } else if (n >= m) {
            answer = 0;
        } else answer = 0;
    }
    
    if(ineq === '<' && eq === '!'){
        if(n < m) { 
            answer = 1;
        } else answer = 0;
    }
    
    
    
    
    
    return answer;
}