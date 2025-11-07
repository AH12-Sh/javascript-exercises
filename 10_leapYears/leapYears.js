const leapYears = function(year) {
    if(year % 4 == 0 && year % 400 == 0) return true;
    if(year % 4 == 0 && year % 100 == 0) return false;
    if(year % 4 == 0) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;

/* pseudocode:

Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900)
 unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

if % 4 = 0: true;
if % 100 = 0 false;
if % 400 = 0 true;

if divisible by 4 = 0, true EXCEPT if divisible by 100 in which case false... 

*/