function solution(s) {
    let lastIndex = {}; // 빈 객체 선언
    let answer = []; // 빈 배열 선언
    
    for (let i=0; i<s.length; i++) { // s의 길이만큼 반복
        let char = s[i]; // char에 s의 i번째 글자 할당
        
        if (lastIndex[char] !== undefined) { // 만약 객체에 char이라는 key 값이 존재하면,
            answer.push(i - lastIndex[char]); // 반복 횟수 - lastIndex 객체속 key의 value값
        } else {
            answer.push(-1); // 처음 등장한 문자 -> -1 담기
        }
        
        lastIndex[char] = i;  // 현재 글자의 위치를 업데이트
    }
    
    return answer;
}