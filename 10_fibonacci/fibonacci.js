const fibonacci = function(pos) {
    pos = parseInt(pos);
    let init = [0,1];
    if (pos < 0) {
        return "OOPS"
    }
    for (let i=2; i<=pos; i++) {
        init[i] = init[i-1] + init [i-2];
    }
    return init[pos];
};

// Do not edit below this line
module.exports = fibonacci;
