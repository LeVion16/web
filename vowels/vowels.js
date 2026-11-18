// view:
function getValues() {
    const area = document.querySelector("#input");
    if (!area.value.trim()) {
        return "";
    }
    return area.value.trim();
}

// view:
function btnhandler() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", btnController);
}

// view:
function displayResult(chars) {
    const h3 = document.querySelector("h3");
    h3.textContent = chars;
}

// model:
function analyse(characters) {
    const vowels = "aáeéiíoóöőuúüű";
    const result = [];
    for (let c of characters) {
        if (vowels.includes(c.toLowerCase())) {
            result.push(c);
        }
    }
    const vowelsSet = new Set(result); // Halmaz létrehozása az ismétlődés elkerülésére.
    const resultArray = Array.from(vowelsSet); // Az Array osztály from metódusa tömbbé konvertálja a halmazt.
    return resultArray.join(", ");
}

// controller:
function btnController() {
    const values = getValues();
    if (!values) {
        alert("Kerem adjon eg szoveget! ");
        return;
    }
    const result = analyse(values);
    displayResult(result);
}