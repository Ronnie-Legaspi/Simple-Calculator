let expression = "";

function numClick(value) {
    expression += value;
    document.getElementById("mainScreen").value = expression;
}

// Calculate the given numbers
function calculate() {
    try {
        let result = new Function("return " + expression)();
        document.getElementById("mainScreen").value = result;
        expression = result.toString(); // allow chaining
    } catch (error) {
        document.getElementById("mainScreen").value = "Error";
        expression = "";
    }
}

// Clear screen
function clearScreen() {
    expression = "";
    document.getElementById("mainScreen").value = "";
}

// Keyboard support
document.addEventListener("keydown", function (e) {
    const allowedKeys = "1234567890+-*/.";
    if (allowedKeys.includes(e.key)) {
        numClick(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        expression = expression.slice(0, -1);
        document.getElementById("mainScreen").value = expression;
    } else if (e.key.toLowerCase() === "c") {
        clearScreen();
    }
});
