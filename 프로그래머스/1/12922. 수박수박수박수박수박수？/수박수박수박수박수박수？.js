function solution(n) {
    /* 첫 번째 풀이.
        
    let answer = [];
    
    for(let i=0; i<n; i++) {
        if(i % 2 === 0) answer[i] = '수'
        if(i % 2 !== 0) answer[i] = '박'
    }

    return answer.join('');s

    */
    
    return Array.from({ length: n}, (_, index) => index % 2 === 0 ? '수' : '박').join('');
}