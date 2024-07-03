const reverseString = function(str) {
    let arr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        arr += str.charAt(i);
    }
    return arr;
};

// Do not edit below this line
module.exports = reverseString;
