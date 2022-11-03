/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const secretMap = {}
    for(let c of secret) {
        secretMap[c] = secretMap[c] || 0
        secretMap[c] += 1
    }
    let bulls = 0
    let cows = 0
    let used = {}
    for(let i = 0; i< guess.length; i++) {
        if(guess[i] === secret[i] && secretMap[guess[i]] > 0) {
            bulls += 1
            secretMap[guess[i]]--
        }  
        
    }
    for(let i = 0; i< guess.length; i++) { 
        
        if(guess[i] !== secret[i] && secretMap[guess[i]] > 0) {
            cows += 1
            secretMap[guess[i]]--
        }
    }
    return bulls + "A" + cows + "B"
};