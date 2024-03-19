const repeatString = function(phrase, count) {
    let outputString = '';
    if (count == 0 || phrase == '') {
        return ""
    } else if ( count < 0 ) {
        return "ERROR"
    } 
    for (let i=1; i<=count; i++) {
        outputString+=phrase;
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
