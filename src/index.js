module.exports = function reverse (n) {
    let N = n.toString().split('')
    if(N[0] === '-'){
        N.shift()
    }
    const newN = N.reverse().join('');
    return newN
}

