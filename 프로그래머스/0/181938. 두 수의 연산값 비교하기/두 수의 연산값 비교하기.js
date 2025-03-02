function solution(a, b) {
    
    let sticky = String(a) + String(b)
    let stickyDoubled = 2 * a * b;
    
    return Math.max(Number(sticky), stickyDoubled);

}