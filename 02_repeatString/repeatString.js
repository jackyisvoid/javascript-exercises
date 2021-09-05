const repeatString = function(string, num) {
    temp = string;
    let negative = "ERROR";
    if (num === 0) {
        return "";
    }
    if (num < 0) {
        return negative;
    }
    
    for (i = 1; i < num; i++) {
        string = string + temp;
    }
    return string;
};

module.exports = repeatString;
