function solution(s) {
    let lower = s.split('').filter(c => c === c.toLowerCase() && c !== c.toUpperCase());
    let bigger = s.split('').filter(c => c === c.toUpperCase() && c !== c.toLowerCase());
    
    lower.sort((a, b) => b.localeCompare(a));
    bigger.sort((a, b) => b.localeCompare(a));
    
    return lower.join('') + bigger.join('');
}