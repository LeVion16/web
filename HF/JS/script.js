// 1. Elemek kigyűjtése a DOM-ból
const textHTML = document.querySelector("#text");
const input1HTML = document.querySelector("#input1");
const input2HTML = document.querySelector("#input2");

const btnShow = document.querySelector("#btnShow"); // Az új Megjelenít gomb
const btnColor = document.querySelector("#btn1");
const btnItalic = document.querySelector("#btn2");
const btnStrike = document.querySelector("#btn3");

// 2. Szöveg összefűzése és megjelenítése
function renderText() {
    const val1 = input1HTML.value;
    const val2 = input2HTML.value;
    
    // Összefűzés szóközzel
    textHTML.textContent = val1 + " " + val2;
}

// 3. Eseménykezelők hozzárendelése a gombokhoz

// "Megjelenít" gomb kattintásra összefűzi a szöveget
btnShow.addEventListener("click", renderText);

// Piros szín ki/bekapcsolása (toggle)
btnColor.addEventListener("click", function() {
    textHTML.style.color = textHTML.style.color === "red" ? "black" : "red";
});

// Dőlt betű stílus váltása
btnItalic.addEventListener("click", function() {
    textHTML.style.fontStyle = textHTML.style.fontStyle === "italic" ? "normal" : "italic";
});

// Áthúzott szöveg váltása
btnStrike.addEventListener("click", function() {
    textHTML.style.textDecoration = textHTML.style.textDecoration === "line-through" ? "none" : "line-through";
});