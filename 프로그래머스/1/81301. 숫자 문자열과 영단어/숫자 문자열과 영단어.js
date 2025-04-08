function solution(s) {
  const numberWords = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
  };

    for (const [word, digit] of Object.entries(numberWords)) {
        s = s.replaceAll(word,digit);
    }
    
    return Number(s); 
    
}