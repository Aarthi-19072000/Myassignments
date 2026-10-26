// Conditional statements.

// a) launchBrowser function using if-else
function launchBrowser(browserName) {
    // Convert to lowercase to make the check case-insensitive
    let browser = browserName.toLowerCase();
    
    if (browser === "chrome") {
        console.log("Launching Chrome browser...");
    } else {
        console.log("Launching " + browserName + " browser (Other)...");
    }
}

// b) runTests function using switch case
function runTests(testType) {
    
    let type = testType.toLowerCase();
    
    switch (type) {
        case "smoke":
            console.log("Running Smoke Tests: Verifying critical core functionalities.");
            break;
        case "sanity":
            console.log("Running Sanity Tests: Checking quick stability after a minor build.");
            break;
        case "regression":
            console.log("Running Regression Tests: Ensuring existing features aren't broken by new code.");
            break;
        default:
            console.log("Unknown test type provided. Defaulting to Smoke Tests...");
            console.log("Running Smoke Tests: Verifying critical core functionalities.");
            break;
    }
}


console.log("--- Testing launchBrowser ---");
launchBrowser("Chrome");
launchBrowser("Firefox");

console.log("\n--- Testing runTests ---");
runTests("Sanity");
runTests("Regression");
runTests("Performance"); 
