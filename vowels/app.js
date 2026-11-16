// Belépési pont:
document.addEventListener("DOMContentLoaded", () => {
    btnHandler();
    // Ez a számoláshoz tartozik már:
    countBtnHandler();
});
// view:
function btnHandler() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", btnController);
}
// controller:
function btnController() {
    const values = getValues();
    if (!values) {
        // displayResult("Kérem adjon meg valamit!");
        alert("Kérem, adjon meg szöveget!");
        return;
    }
    const result = analyse(values);
    displayResult(result);
}
// view:
function getValues() {
    const area = document.querySelector("#input");
    if (!area.value.trim()) 
        return "";
    return area.value.trim();
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
    const vowelsSet = new Set(result); // Halmaz létrehozása az ismétlődés elkerülésére. A new kulcsszó memóriát foglal, a Set osztálynév után ott a két körzárójel, tehát az már konstruktor, benne a paraméter.
    const resultArray = Array.from(vowelsSet); // Az Array osztály from metódusa tömbbé konvertálja a halmazt.
    return resultArray.join(", ");
}
// view:
function displayResult(chars) {
    const h3 = document.querySelector("h3");
    h3.textContent = chars;
}

// ************************************* jegyek átlaga:
// view:
function countBtnHandler() {
    const btn = document.querySelector("#count");
    btn.addEventListener("click", countBtnController);
}
// controller:
function countBtnController() {
    const value = getNumberValues();
    if (!value) {
        alert("Kérem 1-től 5-ig számokat adjon meg!");
        return;
    }
    console.log(value);
}
// view:
function getNumberValues() {
    const inputElement = document.querySelector("#grade");
    const value = Number(inputElement.value.trim());
    if (value < 1 || value > 5)
        return 0;
    return value;
}

// Ahhoz, hogy az inputból több jegyet is kivehessünk, át kell alakítani a programot. 
/**
 * Vagy úgy, hogy még egy gombot készítesz, és azt nyomkodva gyűjtjük a jegyeket egy listába, és a getNumberValues függvény listát fog visszaadni.
 * Vagy úgy, hogy az input-ra egy "input" eseménytfigyelőt teszel. Ekkor viszont sok mindenen módosítani kell még. Az elsőt javaslom.
 */