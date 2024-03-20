const removeFromArray = function(baseArray, ...args) {
    let outputArray = [];
    for (item of baseArray) {
        if (!args.includes(item)) {
            outputArray.push(item);
        }
    }
    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
