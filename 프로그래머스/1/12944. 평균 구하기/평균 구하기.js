function solution(arr) {
    
    let quantity = arr.length;
    let sum = 0;
    
    for(let i=0; i<arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    let answer = sum / arr.length;
    
    return answer;
}