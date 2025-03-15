function solution(numbers) {
    
    let set = new Set(numbers);
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return array.filter(num => !set.has(num)).reduce((acc, val) => acc + val);    
}