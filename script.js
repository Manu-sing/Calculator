const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const del = document.querySelector(".del");
const buttons = Array.from(document.querySelectorAll("button"));

function add(num1, num2) {
   return (Math.round((num1 + num2) * 10) / 10);
}

function subtract(num1, num2) {
    return Math.round((num1 - num2) * 10) / 10
}

function multiply(num1, num2) {
    return Math.round((num1 * num2) * 10) / 10
}

function divide(num1, num2) {
    if(num1 == 0 || num2 == 0) {
        return "Are you sure you want to divide a number by 0? ;)";
    } return Math.round((num1 / num2) * 10) / 10   
}


function operate(operator, num1, num2) {
    if(operator == '+') {
        return add(num1, num2);
        
    } else if(operator == '-') {
        return subtract(num1, num2);
    
    } else if(operator == '*') {
        return multiply(num1, num2)
    
    } else if(operator == '÷') {
        return divide(num1, num2);
    }
}

let displayValue;
let key;
let keyValue;
let str;
let newStr;
let num1;
let operator;
let num2;

display.textContent = 0;

buttons.forEach((button) => {
    button.addEventListener("click", e => {
        key = e.target;
        keyValue = key.textContent;
        displayValue = display.textContent;


        if (e.target.classList.contains("clear")) {
            if(display.textContent) {
                display.textContent = 0;
            }

        } else if (e.target.classList.contains("del")) {
                str = display.textContent
                newStr = str.slice(0, -1);
                display.textContent = +newStr;
                displayValue = +display.textContent;

        } else if (e.target.classList.contains("digit")) {
            if(displayValue === '0') {
                display.textContent = keyValue
            } else {
                display.textContent = displayValue + keyValue;
            }
        
        } else if (e.target.classList.contains("operator")) {
            num1 = +displayValue;
            operator = e.target.textContent;
            display.textContent = 0;

        } else if (e.target.classList.contains("equal")) {
            
            num2 = +displayValue;
            display.textContent = operate(operator, num1, num2);

        }
    
    })
})






















 








