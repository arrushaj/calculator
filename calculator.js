function add(x,y) {
    let sum = x + y;
    if (Number.isInteger(sum)) {
        console.log("YESSIR");
        if (sum.toString().length > 8) {
            console.log("YUP");
            return sum.toExponential(5);
        } else {
            return sum;
        }
    } else {
        if (sum.toString().length > 12) {
            return sum.toExponential(5);
        } else {
            return sum;
        }
    }
}

function subtract(x,y) {
    let difference = x - y;
    if (Number.isInteger(difference)) {
        if (difference.toString().length > 8) {
            console.log("YUP");
            return difference.toExponential(5);
        } else {
            return difference;
        }
    } else {
        if (difference.toString().length > 8) {
            return difference.toExponential(5);
        } else {
            return difference;
        }
    }
}

function multiply(x,y) {
    let product = x * y;
    if (Number.isInteger(product)) {
        if (product.toString().length > 8) {
            return product.toExponential(5);
        } else {
            return product;
        }
    } else {
        if (product.toString().length > 8) {
            return product.toExponential(5);
        } else {
            return product;
        }
    }
}

function divide(x,y) {
    let division = x / y;
    if (y === 0) {
        return ("What are you doing?");
    } else if (Number.isInteger(division)) {
        console.log("YESSIR");
        if (division.toString().length > 8) {
            console.log("YUP");
            return division.toExponential(5);
        } else {
            return division;
        }
    } else {
        if (division.toString().length > 8) {
            return division.toExponential(5);
        } else {
            return division;
        }
    }
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
        } else if (set === true) {
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
            display.textContent = operate(sign, x, y);
            x = Number(display.textContent);
            y = null;
            sign = operator.textContent;
            set = true;
        }

    });
});

const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    display.textContent = "0";
    sign = null;
    x = null;
    y = null;
    set = null;
});

equals.addEventListener('click', () => {
    if (sign != null) {
        console.log(sign);
        y = Number(display.textContent);
        display.textContent = operate(sign, x, y);
        x = null;
        y = null;
        set = true;
        sign = null;
    }
});

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => {
    if (display.textContent.includes('.') && (set === false)) {
        console.log("NOPE");
        return;
    } else if (set === true) {
        display.textContent = "0.";
        set = false;
    } else {
        display.textContent = display.textContent + ".";
    }
})