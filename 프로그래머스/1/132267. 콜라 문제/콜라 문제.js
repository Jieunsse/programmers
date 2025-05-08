function solution(a, b, n) {
    let amount = 0;
    
    while (n >= a) {
        let exchanged = Math.floor(n / a) * b;
        amount += exchanged;
        n = Math.floor(n / a) * b + (n % a);
    }
    
    return amount;
}