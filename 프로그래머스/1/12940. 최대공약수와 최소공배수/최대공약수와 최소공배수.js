function solution(n, m) {
    let min = 1;
    
    for (let i=1; i<=Math.min(n,m); i++) {
        if (n % i === 0 && m % i === 0) {
            min = i;
        }
    }
    
    let max = (n * m) / min;
    
    return [min, max];
}