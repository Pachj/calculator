/**
 * Created by Henry on 25.02.17.
 */
let result = 0;
let secondNumber = false;
let operator = "";

$(document).ready(function () {
   $(":button").click(function (button) {
        let input = $(button).attr("value");
        console.log(input);

        desiredNextStep(input);
   })
});

function desiredNextStep(input) {
    switch (input) {
        case "clear":
            clearCalculator();
            break;

        default:
            if (!secondNumber) {
                result += input;
                console.log(typeof input);
            }
    }
}

function clearCalculator() {
    result = 0;
    operator = "";

    $("#main-display").html("0");
    $("#second-display").html();
}

