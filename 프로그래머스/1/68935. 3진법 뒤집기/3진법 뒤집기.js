function solution(n) {
    let answer = 0;
    
    // n 을 삼진법으로 바꾼다.
    // 숫자를 반전시킨다.
    // 반전된 숫자를 다시 십진법으로 바꿔서 리턴한다.
    
    let array = n.toString(3).split('');
    let number = array.map((item) => Number(item));
    let reversed = number.reverse();
    let string = reversed.join('');
    
    return parseInt(string, 3);
}
