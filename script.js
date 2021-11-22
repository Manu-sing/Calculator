const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator')
const equa = document.querySelector('.equal');


function add(num1, num2) {
    let add = num1 + num2;
    let addR = Math.round(add * 10) / 10;
    return addR;
}


function subtract(num1, num2) {
    let sub = num1 - num2;
    let subR = Math.round(sub * 10) / 10
    return subR;
}


function multiply(num1, num2) {
    let mul = num1 * num2;
    let mulR = Math.round(mul * 10) / 10
    return mulR;
}


function divide(num1, num2) {
    let divi = '';
    let diviR = '';
    
    if(num1 == 0 || num2 == 0) {
        return "Are you sure you want to divide a number by 0? ;)";
    }
    divi = num1 / num2;
    diviR = Math.round(divi * 10) / 10
    return diviR;
}


function operate(operator, num1, num2) {
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


function clearIt() {
    displayInput = '';
    display.value = displayInput;
}


let displayInput = '';
let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {

    if(e.target.classList.contains("clear")) {
    clearIt();
    
    } else if(e.target.classList.contains("digit")) {
        display.value += e.target.innerText;
        displayInput = +display.value;
    
    } else if(e.target.classList.contains("operator")) {
        num1 = displayInput;
        operator = e.target.innerText;
        display.value = '';  
    
    } else if (e.target.classList.contains("equal")) {
         
        
        if(num1 == '' && num2 == '' && operator == '')  {
             return;
         
        } else {
            num2 = displayInput;
            display.value = '';
            operate(operator, num1, num2);
        }
        
            
        }    
    
    
    })
  });


/*One way you could (not saying you must or should, just an idea) - as each digit is pressed, the display is updated. When an operator is pressed, the displayed number might be moved into num1, and the operator into operator, and the display cleared.
The challenge then becomes how to handle num2... 😉 
And be careful - currently, you have it so that every time a button is clicked, you're adding another listener to the clear button. That could be... ugly.

The other way you could consider might be to add one listener to all the .operator buttons, and a different listener to all the .digit buttons. Neither is really better or worse in this case, it's more about what makes sense to you. */


/*Perfect. Do you agree that this one function is handling three pieces of logic?

1) Deciding what button is pressed
2) Mutating num1 num2 operator and displayInput variables
3) Rendering information based on those variables

Imagine if you divide the logic into separate functions, you'll have so much control on how to render data

Maybe not the best suggestion, just throwing an idea out here for you:
else if(e.target.classList.contains("operator")) {
  if(typeof num1 === number) {
    num2 = displayInput;
  }
  operator = e.target.innerText;
  operate(operator, num1, num2)  
}

You could try adding an if statement that assigns to num2 in some way if num1 is already assigned. The provided code probably wouldn't work as you'd like, but might convey the idea to you.*/














 








