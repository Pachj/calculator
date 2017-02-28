/**
 * Created by Henry on 25.02.17.
 */
let calculation = {
    firstNumber: "0",
    secondNumber: "",
    operator: "",
    result: 0,
    firstNumberIsNegative: false,
    secondNumberIsNegative: false
};

let isSecondNumber = false;

$(document).ready(function () {
    $(":button").click(function () { // ToDo: switch AC to C at first digit input
        let newInput = $(this).attr("value");
        // if input is an operator -->
        if (isOperator(newInput)) {
            calculation.operator = newInput;
        }
        // if input is an action
        else if (isAction(newInput)) {
            // if input is clear --> clear everything
            if (newInput === "clear") {
                clearCalculator();
            }
            // if input is signed-integer --> switch isNegative
            else {
                switchNegative();
            }
        }
        // if input isn't an operator --> add the input to one of the numbers
        else {
            updateNumber(newInput);
        }
    })
});

// checks if input is an operator
let isOperator = (newInput) => {
    const operators = ["rest", "division", "multiplication", "subtraction", "addition", "equals"];
    for (let i = 0; i < operators.length; i++) {
        if (newInput === operators[i]) {
            return true;
        }
    }
    return false;
};

// checks if the input is an action
let isAction = (newInput) => {
    const actions = ["clear", "signed-integer"];
    for (let i = 0; i < actions.length; i++) {
        if (newInput === actions[i]) {
            return true
        }
    }
    return false;
};

// adds the new digit to a number
function updateNumber(newDigit) { //ToDo: Add digit limit
    if (!isSecondNumber) {
        if (calculation.firstNumber === "0") {
            calculation.firstNumber = newDigit;
        }
        else {
            calculation.firstNumber += newDigit;
        }
    }
    else {
        calculation.secondNumber += newDigit;
    }
}

// clears the calculation object
function clearCalculator() { // ToDo: clear button switch from C to AC
    calculation.firstNumber = "0";
    calculation.secondNumber = "";
    calculation.operator = "";
    calculation.result = 0;
    calculation.firstNumberIsNegative = false;
    calculation.secondNumberIsNegative = false;
}

// switch number to positive or negative
function switchNegative() {
    if (!isSecondNumber) {
        if (!calculation.firstNumberIsNegative) {
            calculation.firstNumberIsNegative = true;
        }
        else {
            calculation.firstNumberIsNegative = false;
        }
    }
    else {
        if (!calculation.secondNumberIsNegative) {
            calculation.secondNumberIsNegative = true;
        }
        else {
            calculation.secondNumberIsNegative = false;
        }
    }
}

