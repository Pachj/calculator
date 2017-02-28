/**
 * Created by Henry on 25.02.17.
 */
let calculation = {
    firstNumber: "0",
    secondNumber: "0",
    operator: "",
    result: 0,
    firstNumberIsNegative: false,
    secondNumberIsNegative: false
};

let isSecondNumber = false;

$(document).ready(function () {
    $(":button").click(function () { // ToDo: switch AC to C at first digit input
        let newInput = $(this).attr("value");
        // if input is an operator --> if calculation is ready to be calculated --> generate temp result
        if (isOperator(newInput)) {
            if (canCalculate()) {
                generateTempResult(newInput);
            }
            else {
                calculation.operator = newInput;
                isSecondNumber = true;
            }
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
            displayInput();
        }
    })
});

// checks if input is an operator
let isOperator = (newInput) => { //ToDo: equals and dot other type
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
        if (calculation.secondNumber === "0") {
            calculation.secondNumber = newDigit;
        }
        else {
            calculation.secondNumber += newDigit;
        }
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

let canCalculate = () => {
    return (calculation.firstNumber !== "0" && calculation.secondNumber !== "0" && calculation.operator !== "");
};

function generateTempResult(newOperator) { //ToDo: Display ev. in new function
    calculate();
    calculation.firstNumber = calculation.result;
    calculation.secondNumber = "0";
    calculation.operator = newOperator;

    $("#main-display").html(calculation.firstNumber);
}

function calculate() {
    switch (calculation.operator) {
        case "addition":
            addition();
            break;

        case "subtraction":
            subtraction();
            break;

        case "multiplication":
            multiplication();
            break;

        case "division":
            division();
            break;

        case "rest":
            rest();
            break;
    }

    function addition() {
        calculation.result = parseInt(calculation.firstNumber + calculation.secondNumber);
    }

    function subtraction() {
        calculation.result = parseInt(calculation.firstNumber - calculation.secondNumber);
    }

    function multiplication() {
        calculation.result = parseInt(calculation.firstNumber * calculation.secondNumber);
    }

    function division() {
        calculation.result = parseInt(calculation.firstNumber / calculation.secondNumber);
    }

    function rest() {
        calculation.result = parseInt(calculation.firstNumber % calculation.secondNumber);
    }
}

function displayInput() {
    if (!isSecondNumber) {
        $("#main-display").html(calculation.firstNumber);
    }
    else {
        $("#main-display.html")(calculation.secondNumber);
    }
}