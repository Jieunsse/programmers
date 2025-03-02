function solution(a, b) {
    let answer = 0;
    
    let sticky = a.toString() + b.toString();
    let stickyReversed = b.toString() + a.toString();
    
    if(sticky > stickyReversed || sticky == stickyReversed) {
        return answer += Number(sticky);
    } else return answer += Number(stickyReversed); 
    
}