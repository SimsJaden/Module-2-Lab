window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

// Function to show alert
function showAlert() {
    alert(sayHello());
}

// Binding the function to the button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', showAlert);
});