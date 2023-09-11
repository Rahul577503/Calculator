let input = document.getElementById("input");
let historyList = document.getElementById("history-list");

function appendToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
}

function calculate() {
    try {
        const result = eval(input.value);
        historyList.innerHTML += `<li>${input.value} = ${result}</li>`;
        input.value = result;
    } catch (error) {
        input.value = "Error";
    }
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function toggleSign() {
    input.value = -parseFloat(input.value);
}

function squareRoot() {
    try {
        const result = Math.sqrt(eval(input.value));
        historyList.innerHTML += `<li>√(${input.value}) = ${result}</li>`;
        input.value = result;
    } catch (error) {
        input.value = "Error";
    }
}
