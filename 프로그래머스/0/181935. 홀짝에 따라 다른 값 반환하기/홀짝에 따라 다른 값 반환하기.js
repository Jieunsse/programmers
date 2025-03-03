function solution(n) {
    let evenAnswer = 0;
    let oddAnswer = 0;
    
    // 10
    // 2^2, 4^2, 6^2, 8^2, 10^2
    // 4, 16, 36, 64, 100
    // 220
    
    if(n % 2 == 0) {
        for(let i=0; i<=n; i+=2) {
            evenAnswer += i*i;
        }
        return evenAnswer;
    } else {
        for(let j=1; j<=n; j+=2) {
            oddAnswer += j;
        }
        return oddAnswer;
    }
    
    
}