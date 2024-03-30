const getTheTitles = function(bookObjArr) {
    const returnArr = [];
    for (obj of bookObjArr) {
        returnArr.push(obj.title);
    }
    return returnArr;
};

// Do not edit below this line
module.exports = getTheTitles;
