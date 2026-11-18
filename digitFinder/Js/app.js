// view:
function getValues() {
    const area = document.querySelector("#text");
        if (!area.value.trim()) {
            return "";
        }
        return area.value.trim();
}

//view:
function btnhandler() {
    const btn = document.querySelector("#search");
    btn.addEventListener("click", btnController);
}

// view:
function displayResult(nums) {
    const p = document.querySelector("#result");
    p.textContent = nums;
}

// modell:
function getDigits(text) {
    const digits = "0123456789";
    const resultList = [];

    for (let character of text) {
        if (
            digits.includes(character) &&
            !resultList.includes(character)
        ) {
            resultList.push(character);
        }
    }

    return resultList;
}

// controller:
function btnController() {
    const values = getValues();
    const result = getDigits(values);
    displayResult(result.join(", "));
}

// entryPoint:
document.addEventListener("DOMContentLoaded", () => {
    btnhandler();
})