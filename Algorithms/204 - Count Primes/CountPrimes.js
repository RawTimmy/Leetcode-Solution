/**
 * @param {number} n
 * @return {number}
 */
 
var countPrimes = function(n) {
    let notPrimes = new Array(n);
    let res = 0;
    
    for(let i = 2; i < n; i++){
        if(!notPrimes[i]){
            res++;
            for(let j = 2; i * j < n; j++){
                notPrimes[i*j] = true;
            }
        }
    }
    
    return res;
};