const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const del = document.querySelector(".del");
const buttons = (document.querySelectorAll("button"));
const clearButtons = document.querySelectorAll(".clear, .clearEntry");
const signChange = document.querySelector(".signChange");


const initApp = () => {
    const currentValueElem = document.querySelector(".currentValue")
    const previousValueElem = document.querySelector(".previousValue")
    
    let itemArray = [];
    const equationArray = [];
    let waitingForNewNumber = false; // meaning that we are still not ready to receive a new number
    
    digits.forEach(button => {
        button.addEventListener("click", (e) => {
            
            const newInput = e.target.textContent;

            if(waitingForNewNumber) { //letting the calculator know that we are ready to receive a new number
                currentValueElem.value = newInput;
                waitingForNewNumber = false; // because we just received the new number and now we are no longer waiting for a new one;
            
            } else { // meaning that here we are not waiting for a new number, and that we are inputting the first one
                if(currentValueElem.value == 0) {
                    currentValueElem.value = newInput;
                } else currentValueElem.value += newInput;

            }


        })
    })

    operators.forEach(button => {
        button.addEventListener("click", (e) => {
            // first thing we want to check is if the equal sign is showing somewhere, meaning that we have already completed an equation
            // and if that is the case it means that we are ready for a new number (aka the waitingForNewNumber should be set to true);
            if(waitingForNewNumber) {
                // empty the place where you have stored that equarion string (e.g 5 + 3 = 8)
                itemArray = [];
                // I empty because I'm ready to start with a new equation
            }

           const newOperator = e.target.textContent
           const currentVal = currentValueElem.value;

            // need a number first, meaning that if we don't have a number, we can't perform an operation on it
           if(!itemArray.length && currentVal == 0) return; // if the array has no length, meaning that it is empty and therefore no 
            // equation has already been performed and the currentVal is equal to zero, then even if I press an operator, I don't want to do anything
        
            // begin new equation
            if(!itemArray.length) {
                itemArray.push(currentVal, newOperator);
                previousValueElem.textContent = currentVal + " " + newOperator;
                return waitingForNewNumber = true; // the caculator knows that we are ready for a new number   

            }

            // complete an equation by checking if the itemArray has length now
            if(itemArray.length) {

                itemArray.push(currentVal); // num2
                
                const equationObj = {
                    num1: parseFloat(itemArray[0]),
                    num2: parseFloat(currentVal),
                    operator: itemArray[1]
                }

                equationArray.push(equationObj); // this is where all our equations will be stored
                const equationString = equationObj["num1"] + " " + equationObj["operator"] + " " + equationObj["num2"]
                const newValue = operate(equationString, currentValueElem);

                previousValueElem.textContent = newValue + " " + newOperator;

                // start a new equation
                itemArray = [newValue, newOperator];
                waitingForNewNumber = true;
                console.log(equationArray)
                
            }
        
        })
    })


    equal.addEventListener("click", () => {
        const currentVal = currentValueElem.value;
        
        if(!itemArray.length) {
            return currentVal;
        } else {
            itemArray.push(currentVal);
            equationObj = {
            num1: parseFloat(itemArray[0]),
            num2: parseFloat(currentVal),
            operator: itemArray[1]
            }
        }

        equationArray.push(equationObj);
        equationString = equationObj["num1"] + " " + equationObj["operator"] + " " + equationObj["num2"];
        operate(equationString, currentValueElem);

        previousValueElem.textContent = `${equationString} =`;

        waitingForNewNumber = true;
        itemArray = [];
        console.log(equationArray);
    
    })

    
    clearButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            
            currentValueElem.value = 0;
            
            if(e.target.classList.contains("clear")) {
                previousValueElem.textContent = 0;
                itemArray = [];     
                
            }
        })
    })

    del.addEventListener("click", () => {
        currentValueElem.value = currentValueElem.value.slice(0, -1);
        if(currentValueElem.value == "") {
            currentValueElem.value = 0;
        }
    })

    signChange.addEventListener("click", () => {
        currentValueElem.value = currentValueElem.value * -1;
    })
}

document.addEventListener("DOMContentLoaded", initApp);



const operate = (equationString, currentValueElem) => {
    
    if(equationString.includes("+")) {
        currentValueElem.value = (Math.round((equationObj["num1"] + equationObj["num2"]) * 10) / 10);
    } else if (equationString.includes("-")) {
        currentValueElem.value = (Math.round((equationObj["num1"] - equationObj["num2"]) * 10) / 10);
    } else if (equationString.includes("*")) {
        currentValueElem.value = (Math.round((equationObj["num1"] * equationObj["num2"]) * 10) / 10);
    } else if (equationString.includes("÷")) {
        if(equationObj["num2"] == 0) {
        currentValueElem.value = "Sure?";
        } else {
        currentValueElem.value = (Math.round((equationObj["num1"] / equationObj["num2"]) * 10) / 10);
        }
    }
      
    return currentValueElem.value

}


/*function operate(operator, num1, num2) {
    if(operator == '+') {
        return add(num1, num2);
        
    } else if(operator == '-') {
        return subtract(num1, num2);
    
    } else if(operator == '*') {
        return multiply(num1, num2)
    
    } else if(operator == '÷') {
        return divide(num1, num2);
    } 
}*/

/*function add(num1, num2) {
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
 }*/














 








