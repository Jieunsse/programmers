function solution(t, p) {
    const numberP = Number(p);
    let count = 0;
    
    for (let i=0; i<=t.length-p.length; i++) {
        const numberT = Number(t.slice(i, i + p.length));
        
        if (numberT <= numberP) {
            count += 1;
        }
    }
    
    return count;
}