function solution(d, budget) {
    
    let count = 0;
    
    let array = d.sort((a, b) => a - b);
 
    for (let i=0; i<array.length; i++) {
        if(budget >= array[i]) {
            budget -= array[i];
            count++;
        }
    }
    
    return count;
}
