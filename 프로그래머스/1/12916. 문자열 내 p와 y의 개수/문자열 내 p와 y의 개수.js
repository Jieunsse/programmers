function solution(s){
    var p = 0;
    var y = 0;    
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') p++;
        if(s[i] === 'y' || s[i] === 'Y') y++;
        
    }
    
    if(p === y) return true;
    
    console.log(p);
    console.log(y);
    
    return false;
}