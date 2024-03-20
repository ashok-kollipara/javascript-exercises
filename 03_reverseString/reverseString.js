const reverseString = function(phrase) {
    let output = "";
    for (i=phrase.length-1; i>=0; i--) {
        output+=phrase[i];
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
