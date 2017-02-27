/**
 * Created by Henry on 25.02.17.
 */
let calculation = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    result: 0
};

let isSecondNumber = false;

$(document).ready(function () {
    $(":button").click(function () {
        let newInput = $(this).attr("value");
        if (isOperator(newInput)) {
            console.log("Is Operator!")
        }
        else {
            updateNumber(newInput);
        }
    })
});

// checks if input is an operator
let isOperator = (newInput) => {
    const operators = ["clear", "signed-integer", "rest", "division", "multiplication", "subtraction", "addition", "equals"];
    for (let i = 0; i < operators.length; i++) {
        if (newInput === operators[i]) {
            return true;
        }
    }
    return false;
};

// adds the new digit to a number
function updateNumber(newDigit) {
    if (!isSecondNumber) {
        calculation.firstNumber += newDigit;
    }
    else {
        calculation.secondNumber += newDigit;
    }
}