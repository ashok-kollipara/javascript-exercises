const palindromes = function (inputString) {
    inputString = inputString.toLowerCase();
    let input = inputString.matchAll("[a-zA-Z0-9]+");
    input = Array.from(input);
    input = input.flat();
    input = input.join("");
    let revArr = input.split("");
    revArr.reverse();
    revArr = revArr.join("");
    return ( revArr  === input )
};

// Do not edit below this line
module.exports = palindromes;
