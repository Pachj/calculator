/**
 * Created by Henry on 28.02.17.
 */
let result = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

$(document).ready(function () {
    $(":button").click(function () {
        let input = $(this).attr("value");

        nextStep(input);
    });
});

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

        default: // ToDo: max number length
            if (!isSecondNumber) {
                result += input;
                showInput(result);
            }
            else {
                secondNumber += input;
                showInput(secondNumber);
            }
            break;
    }
}

function calculate(newOperator) {
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

function showInput(inputToDisplay) {
    $("#main-display").html(inputToDisplay);
}

