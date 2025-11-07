const arr = [1,2,3,4,5]


const removeFromArray = function(array, ...args) {
    for(let arg of args) {
    let index = array.indexOf(arg);
    array.splice(index, 1);
    return array;
    };
};


// Do not edit below this line
// module.exports = removeFromArray;


/* array.include() checks if the value in cluded in array, and returns true/false

/ array.splice(start, deleteCount) - removes item at that index, changes the array.

/ arraincludes.

/ array.map(function(currentValue, index, arr), thisValue) applies
/ function every value in the array. 


/ let's trying removing a single array element, 
/based on a value passed to it when the function is called 

This function worked:

const array = [1,2,3,4,5]

const removeFromArray = function(value) {

let index = array.indexOf(value);
array.splice(index, 1);
return array;
};

Let's try updating it so that can specify the array in the function

This function worked:

const removeFromArray = function(value, array) {

    let index = array.indexOf(value);
    array.splice(index, 1);
    return array;
};

Let's try multiple values



*/