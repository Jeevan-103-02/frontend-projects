let display = document.getElementById("display");
let isResultDisplayed = false;

function appendValue(value) {
    if (isResultDisplayed) {
        display.value = "";
        isResultDisplayed = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (expression === "") return;

        let result = Function("return " + expression)();
        display.value = result;
        isResultDisplayed = true;
    } catch (error) {
        display.value = "Error";
    }
}
