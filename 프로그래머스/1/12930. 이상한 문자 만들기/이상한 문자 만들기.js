function solution(s) {
    
    let words = s.split(' ');
    let answer = [];  
    
    for (let word of words) {
        let newWord = '';
        
        for (let i=0; i<word.length; i++) {
            if (i % 2 === 0) {
                newWord += word[i].toUpperCase();
            } else {
                newWord += word[i].toLowerCase();
            }
        }
        
        answer.push(newWord);
    }
    return answer.join(' ');
}