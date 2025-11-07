function sumAll(a,b) {
    if(typeof(a), typeof(b) != "number") {              // looking at the solution, could have folded this into the integer check below - because that checks 
        return "ERROR";                                 // both whether it is an number and an integer, whereas I did two separate checks... 
    } else if (Number.isInteger(a) === false) {         
        return "ERROR";
    } else if (Number.isInteger(b) === false) {
        return "ERROR";
    } else if  {
        const array = [];
        array.push(a,b);
        array.sort(function(a,b){return a - b});
        let lowerNum = array[0];
        let higherNum = array[1];
        if (higherNum + lowerNum < 0) {                 // although this passed tests it is not strictly correct as a very high positive number 
            return "ERROR";                             // would negate a low negative number, really should have checked if each parameter was below 0. 
        } else { 
            let sumOfAllNums = 0;
            for (let i = lowerNum; i <= higherNum; i++) {       //this was the correct way to run this loop
                sumOfAllNums += i;
            };
            return sumOfAllNums
            };
        };
};
// Do not edit below this line
module.exports = sumAll;


/* sort numbers so in correct order, if a negative number, return an error
 Determine which is the higher number and use that as initial place from which to start.

Can use a reduce function to figure this out? Set's initial accumulator, then adds each to it... 
Or Map?

this creates an array from two parameters

function sumAll(a, b) {
    const array = [];
    array.push(a,b);
    return array

This creates an array from any number of parameters and then sorts them and returns them

function sumAll(...args) {
    const array = [];
    array.push(...args);
    array.sort(function(a,b){return a - b});
    return array


This doesn't work, what it does is create an array, sort the array, then begins with the initial value (lowerNum) as the accumulator, 
then adds + lowerNum + higherNum - so 7 if using 1 and 5. IT is not smart enough to add numbers, 2,3,4 etc and add those together. 


function sumAll(a,b) {
    const array = [];
    array.push(a,b);
    array.sort(function(a,b){return a - b});
    let lowerNum = array[0];
    const sumOfAllNums = array.reduce((total, currentItem) => {
        return total+currentItem;
    }, lowerNum);
    return sumOfAllNums;

    Will have to loop through instead... 
 */