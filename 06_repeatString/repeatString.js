const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let newText = "";
    for(let step = 0; step < num; step++) {
    newText += string;
    }
    return(newText);
  };
  


// Do not edit below this line
module.exports = repeatString;
