function solution(number) {

    // 주어진 배열 number 에서
    // 아무렇게나 3개의 원소를 뽑아
    // 그 합이 0이되는 모든 경우의 수를 리턴할 것.
    // (단, 원소의 값이 같을 수 있다.)
    
    let count = 0;

    for (let i=0; i<number.length-2; i++) {
        for (let j=i+1; j<number.length-1; j++) {
            for (let k=j+1; k<number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) count++;
            }
        }
    }
    
    return count;
}

