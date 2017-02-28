/**
 * Created by Henry on 28.02.17.
 */
let result = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

$(document).ready(function () {
    $(":button").click(function () {
        nextStep($(this).attr("value"));
    });
});

// decides which action should be done with the user input
function nextStep(input) {
    switch (input) {
        case "clear":
            clearCalculator();
            break;

        case "multiplication":
        case "division":
        case "rest":
            calculate(input);
            break;

        case "subtraction":
            if (result === "") {
                result += "-";
                show("-");
            }
            else {
                calculate(input);
            }
            break;

        case "addition":
            if (result === "-") {
                clearCalculator();
            }
            else {
                calculate(input);
            }
            break;

        case "equals":
            if (secondNumber === "") {
                if (result === "") {
                    show(0);
                }
                else {
                    show(result);
                }
            }
            else {
                calculate(input);
            }
            break;

        case "switch":
            if (!secondNumber) {
                if (result[0] === "-") {
                    result = result.replace("-", "");
                }
                else {
                    result = "-" + result;
                }
                show(result);
            }
            else {
                if (secondNumber[0] === "-") {
                    secondNumber = secondNumber.replace("-", "");
                }
                else {
                    secondNumber = "-" + secondNumber;
                }
                show(secondNumber);
            }
            break;

        default: // ToDo: max number length
            if (!isSecondNumber) {
                result += input;
                show(result);
            }
            else {
                secondNumber += input;
                show(secondNumber);
            }
            break;
    }
}

function calculate(newOperator) { //ToDo: secondNumber reinitialize after calculation
    if (operator !== "") {
        switch (operator) {
            case "rest":
                result = parseFloat(result) % parseFloat(secondNumber);
                break;

            case "multiplication":
                result = parseFloat(result) * parseFloat(secondNumber);
                break;

            case "division":
                result = parseFloat(result) / parseFloat(secondNumber);
                break;

            case "subtraction":
                result = parseFloat(result) - parseFloat(secondNumber);
                break;

            case "addition":
                result = parseFloat(result) + parseFloat(secondNumber);
                break;
        }
        $("#main-display").html(result);
    }
    operator = newOperator;
    isSecondNumber = true;
}


function clearCalculator() {
    result = "";
    secondNumber = "";
    operator = "";
    isSecondNumber = false;

    $("#main-display").html(0);
    $("#second-display").html();
}

function show(toDisplay) {
    $("#main-display").html(toDisplay);
}

