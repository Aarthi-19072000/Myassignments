// Odd or Even

function isOddOrEven(number) {
    
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let testNumber = 7;

let result = isOddOrEven(testNumber);
console.log(result); // Outputs: "Odd"