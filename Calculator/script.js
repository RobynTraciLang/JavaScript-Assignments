const display = document.getElementById("display");
// working
let number1 = "";
// working
let number2 = "";
// working
let operator = "";
// working

function press(number) {
    number1 += number;
    display.innerText = number1;
    console.log(number)
}
// working

function setOP(button) {
    operator = button;
    number2 = number1
    number1 = ""
    console.log(operator)
    console.log(number2)
    console.log(number1)
}
// working

function clr() {
    display.innerText = "0";
    number1 = "";
    console.log(number1)
    // working
    number2 = "";
    console.log(number2)
    // working
    operator = "";
    console.log(operator)
    // working
}
// working

function calculate() {
    let a = parseFloat(number2);
    let b = parseFloat(number1);
    let calculation = 0;

    if (operator === "+") {
        calculation = a + b;
    } else if (operator === "-") {
        calculation = a - b;
    } else if (operator === "*") {
        calculation = a * b;
    } else if (operator === "/") {
        calculation = a / b;
    }

    number1 = calculation;
    operator = "";
    display.innerHTML = calculation;
    console.log(calculation)

}
// modified from Marisa's source code, shared on assignment page. I have left it commented out below for my future reference. I decided to go with concepts I already understand, instead of switch, which I haven't learned yet. But it's here when I need to look back and see how it works.

// function calculate() {
//     let a = parseFloat(num2);
//     let b = parseFloat(num1);
//     let res = 0;
//     switch (op) {
//         case "+":
//             res = a + b;
//             break;
//         case "-":
//             res = a - b;
//             break;
//         case "*":
//             res = a * b;
//             break;
//         case "/":
//             res = a / b;
//             break;
//     }
//     num1 = res;
//     op = "";
//     display.innerHTML = res;
// }