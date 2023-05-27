// const display = document.getElementById("display");
// let number1 = "";
// let number2 = "";
// let op = "";

function press(number){
    let displayDiv = document.querySelector("#display");
    displayDiv.innerText = number;
    console.log(number)
    return number;
}

function setOP(op){
    let operatorButtons = document.querySelector(".operator")
    if(op == '+'){
        console.log("+")
    }    
    if(op == '-'){
        console.log("-")
    }
    if(op == '*'){
        console.log("*")
    }
    if(op == '/'){
        console.log("/")
    }
}

function clr(){
    let displayDiv = document.querySelector("#display");
    displayDiv.innerText = "0";
}

function calculate(){
    let displayDiv = document.querySelector("#display");
    let displayText = displayDiv.innerText;
    let operator = setOP();
    let myNumber = press();
    console.log(myNumber)
    let calculation = 0;

    if (operator === "+"){
        calculation = Number(displayText) + Number(displayText);
        displayText = calculation;
        console.log(calculation);
    }
    else if(operator === "−"){
        calculation = Number(displayText) - Number(displayText);
        displayText = calculation;
        console.log(calculation);
    }
    else if(operator === "×"){
        calculation = Number(displayText) * Number(displayText);
        displayText = calculation;
        console.log(calculation);
    }
    else if(operator === "÷"){
        calculation = Number(displayText) / Number(displayText);
        displayText = calculation;
        console.log(calculation);
    }
    return calculation;
}

// function calculate() {
//     let a = parseFloat(num2);
//     let b = parseFloat(num1);
//     let calculation = 0;

//     if (operatorUsed === "+") {
//         calculation = a + b;
//     } else if (operatorUsed === "-") {
//         calculation = a - b;
//     } else if (operatorUsed === "*") {
//         calculation = a * b;
//     } else if (operatorUsed === "/") {
//         calculation = a / b;
//     }

//     num1 = calculation;
//     operatorUsed = "";
//     display.innerHTML = calculation;
// }