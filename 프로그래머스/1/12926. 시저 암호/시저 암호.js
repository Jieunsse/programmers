function solution(s, n) {
    let array = s.split('');
    let answer = [];

    for (let i=0; i<array.length; i++) {
        let char = array[i];
        let code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            answer.push(String.fromCharCode(((code - 65 + n) % 26) + 65));
        }

        else if (code >= 97 && code <= 122) {
            answer.push(String.fromCharCode(((code - 97 + n) % 26) + 97));
        }

        else {
            answer.push(char);
        }
    }

    return answer.join('');
}
