function solution (k, score) {
    let board = [];
    let answer = [];
    
    for (let i=0; i<score.length; i++) {
        board.push(score[i]);
        board.sort((a, b) => b - a);
        if (board.length > k) {
            board.pop();
        }
        answer.push(board[board.length - 1]);
    }
    
    return answer;
}

