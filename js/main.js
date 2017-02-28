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

        default:
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

function showInput(inputToDisplay) {
    $("#main-display").html(inputToDisplay);
}