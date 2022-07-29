function add(x,y) {
    let sum = x + y;
    return sum;
}

function subtract(x,y) {
    let difference = x - y;
    return difference;
}

function multiply(x,y) {
    let product = x * y;
    return product;
}

function divide(x,y) {
    let division = x / y;
    return division;
}

function operate(operator, x, y) {
    if (operator === "+") {
        return add(x,y);
    } else if (operator === "-") {
        return subtract(x,y);
    } else if (operator === "*") {
        return multiply(x,y);
    } else if  (operator === "/") {
        return divide(x,y);
    } else {
        console.log("OOPS");
    }
}

const numbers = document.querySelectorAll('.digit');
const display = document.querySelector('.content');
let displayNumber = display.textContent;

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        if (set === true) {
            display.textContent = "";
            set = false;
        }
        display.textContent = display.textContent + number.textContent;
        
    });
});

const operators = document.querySelectorAll('.operator');
let x;
let y;
let sign;
let set;

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (!x) {
            x = Number(display.textContent);
            sign = operator.textContent;
            set = true;
            console.log(sign);
            console.log(x);

        } else {
            y = Number(display.textContent);
            console.log(sign);
            console.log(x);
            console.log(y);
            display.textContent = operate(sign, x, y);
            x = Number(display.textContent);
            y = undefined;
            sign = operator.textContent;
            set = true;
        }


    });
});