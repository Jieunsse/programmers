function solution(sizes) {
    
    for (let i=0; i<sizes.length; i++) {
        let [w, h] = sizes[i];
        if (w < h) {
            sizes[i] = [h, w];
        }
    }
    
    let maxWidth = 0;
    let maxHeight= 0;
    
    for (let [w, h] of sizes) {
        if (w > maxWidth) maxWidth = w;
        if (h > maxHeight) maxHeight = h;
    }
    
    return maxWidth * maxHeight;
}