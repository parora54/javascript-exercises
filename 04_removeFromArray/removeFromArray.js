const removeFromArray = function(arr) {
    // Convert arguments to an array (excluding the first argument 'arr')
    let elementsToRemove = Array.from(arguments).slice(1);

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let shouldRemove = false;
        for (let j = 0; j < elementsToRemove.length; j++) {
            if (arr[i] === elementsToRemove[j]) {
                shouldRemove = true;
                break;
            }
        }
        if (!shouldRemove) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
