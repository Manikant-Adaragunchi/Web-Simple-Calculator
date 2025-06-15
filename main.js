// This variable stores the current input expression as a string (e.g., "3+4*2")
var curinput = "";

// This variable stores the final result after evaluation
let result = 0;

/**
 * Appends the clicked button's value to the current input string,
 * then updates the display with the new expression.
 */
function input(value) {
    curinput += value;  // Append the value to curinput string
    document.getElementById("d").value = curinput;  // Update the display
}

/**
 * Calculates the result of the current expression using eval().
 * If the expression is invalid (e.g., "5++6"), it catches the error
 * and shows "INVALID" in the display.
 */
function cal() {
    try {
        result = eval(curinput);  // Evaluate the expression
        document.getElementById("d").value = result;  // Show result
    } catch {
        document.getElementById("d").value = "INVALID";  // Show error
    }
}

/**
 * Clears everything:
 * - The current input string
 * - The result
 * - The display field
 */
function cleardisplay() {
    curinput = "";  // Reset input
    result = 0;     // Reset result
    document.getElementById("d").value = "";  // Clear the screen
}
