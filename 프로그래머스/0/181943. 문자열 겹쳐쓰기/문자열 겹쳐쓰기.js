function solution(my_string, overwrite_string, s) {
    let cutByInteger = my_string.substr(0, s); 
    let leftOverString = my_string.substr(s + overwrite_string.length);

    let answer = cutByInteger + overwrite_string + leftOverString;
    return answer;
}
