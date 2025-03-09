function solution(x) {
    
    /*  첫 번째 풀이.
        
        var str = x.toString();
        var arr2 = [];
        var value = 0;
    
        for(let i=0; i<str.length; i++){
            value += Number(str[i]);   
        }
    
        if(x % value === 0) return true;
        else return false;
    */
 
    /*  두 번째 풀이.
    
        arr2 = [];
        arr = x.toString().split('');
        sum = arr.reduce((acc, num) => acc + Number(num), 0);
    
        if(x % Number(sum) === 0) return true;
        else return false;
    */
    
    /*  세 번째 풀이.
        
        arr = x.toString().split('').reduce((acc, num) => acc + Number(num), 0);

        if(x % arr === 0) return true;
        else return false;
    */
    
    /*  네 번째 풀이.
        
        arr = x.toString().split('').reduce((acc, num) => acc + Number(num), 0);
        return x % arr === 0 ? true : false;
    */
    
    arr = x.toString().split('').reduce((acc, num) => acc + Number(num), 0);
    return x % arr === 0 ? true : false;
   
}