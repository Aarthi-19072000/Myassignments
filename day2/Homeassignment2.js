// Number Type

function checkNumberType(number) {
    
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}


let testValue = -5;


let outcome = checkNumberType(testValue);
console.log(outcome); 