const repeatString = function(string, num) {
    if (num < 0) {
        return "No negative numbers";
    }
    let total = '';
    for (let i = 0; i < num; i++) {
        total += string;
    }
    return total;
};

// Do not edit below this line
module.exports = repeatString;
