function solution(n) {
    var answer = [];
    var str = n.toString();
   
    for(let i=str.length-1; i>=0; i--) {
        answer.push(Number(str[i]));
    }
    
    return answer;
}