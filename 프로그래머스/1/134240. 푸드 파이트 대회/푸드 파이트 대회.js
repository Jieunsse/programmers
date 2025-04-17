function solution(food) {
    
    let answer = [];
    let menu = [];
    let table = [];
    
    for (let i=1; i<food.length; i++) {
        let count = Math.floor(food[i] / 2);
        menu.push(count);
    }
    
    
    for (let i=0; i<menu.length; i++) {
        for (let j=0; j<menu[i]; j++) {
            table.push(i + 1);
        }
    }
    
    answer.push(table.join(''));
    answer.push(0);
    answer.push(table.reverse().join(''));
    
    
    return answer.join('');
}