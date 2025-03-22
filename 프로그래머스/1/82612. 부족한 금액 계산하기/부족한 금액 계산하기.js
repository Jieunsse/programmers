function solution(price, money, count) {
    let fee = [];
    
     for (let i=0; i<=count; i++) {
        fee[i] = price * i; 
    }
    
    let lackBudget = fee.slice(1).reduce((a, b) => a + b, 0) - money
    
    return lackBudget > 0 ? lackBudget : 0;
}