const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator')
const equa = document.querySelector('.equal');


function add(num1, num2) {
    let add = num1 + num2;
    return add;
}


function subtract(num1, num2) {
    let sub = num1 - num2;
    return sub;
}


function multiply(num1, num2) {
    let mul = num1 * num2;
    return mul;
}


function divide(num1, num2) {
    let divi = num1 / num2;
    return divi;
}


function operate(operator, num1, num2) {
    operator;
    num1;
    num2;
    // based on the operator, call one of the above functions on the 2 numbers
}

let displayInput = 0;
let num1 = 0;
let num2 = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
      
    if(e.target.classList.contains("clear")){
        displayInput = '';
        display.value = displayInput;
    
    } else if(e.target.classList.contains("digit")) {
        display.value += e.target.innerText;
        displayInput = +display.value;
    
    } else if(e.target.classList.contains("operator")) {
        num1 = displayInput;
        operator = e.target.innerText;
        display.value = '';
        // and then I want to clear the display so that the new digit pressed represent the new 
        // and can then be stored in num2
       
    
    } else if (e.target.classList.contains("equal")) {
        num2 = displayInput;
        display.value = '';
        
        if(operator == '+') {
            display.value = add(num1, num2);
            
        } else if(operator == '-') {
            display.value = subtract(num1, num2);
        
        } else if(operator == '*') {
            display.value = multiply(num1, num2)
        
        } else if(operator == '/') {
            display.value = divide(num1, num2);
        }
    
    }
    
    })
  });


/*One way you could (not saying you must or should, just an idea) - as each digit is pressed, the display is updated. When an operator is pressed, the displayed number might be moved into num1, and the operator into operator, and the display cleared.
The challenge then becomes how to handle num2... 😉 
And be careful - currently, you have it so that every time a button is clicked, you're adding another listener to the clear button. That could be... ugly.

The other way you could consider might be to add one listener to all the .operator buttons, and a different listener to all the .digit buttons. Neither is really better or worse in this case, it's more about what makes sense to you. */












 








