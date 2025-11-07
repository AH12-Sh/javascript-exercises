const reverseString = function(string) {
    let newString = "";
    let stringPosition = -1;
    for(let step = 0; newString.length < string.length; step++) {
        newString += string.at(stringPosition);
        stringPosition -= 1;  
};
 return newString    
}
 



// Do not edit below this line
module.exports = reverseString;
