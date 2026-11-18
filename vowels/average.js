//view:
function getValues() {
    const area = document.querySelector("#grade");
    if (!area.value.trim()) {
        return "";
    }
    return area.value.trim();
}

// view:
function btnhandler() {
    const btn = document.querySelector("#count");
    btn.addEventListener("click", btnController());
}

// view:
function displayresult(nums) {
    const h2 = document.querySelector("h2");
    h2.textContent = nums;
}

// modell:
function getAverage(nums) {
    const numberList = [];
    for (let n in nums) {
        resultList.push(n);
    }
    let sum = 0;
    for (let i in numberList) {
        sum += i;
    }
    const avg = sum / numberList.length;
    return avg;
}

// controller:
function btnController() {
    const values = getValues();
    if (!values) {
        alert("Kerem adjonmeg szamokat!")
    }
    const result = getAverage(values);
    displayresult(result);
}