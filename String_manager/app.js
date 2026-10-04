// Mégis inkább legyen eljárás, amely nem ad vissza semmit, csupán a range-eket és a label-eket kapcsolja össze, és visszajelzést ad a felhasználónak a range-ben beállított értékekről. Ez a rész csak a megjelenésről szól.
function rangeInputManager(){
    // let startValue;
    // let endValue;
    const startRange = document.querySelector("#start");
    const endRange = document.querySelector("#end");
    startRange.addEventListener("input", function() {
        const startLabel = document.querySelector("#start-label");
        const startRange = document.querySelector("#start");
        startLabel.textContent = startRange.value;
        console.log(startRange.value);
        // startValue = startRange.value;
    });

    endRange.addEventListener("input", function() {
        const endLabel = document.querySelector("#end-label");
        const endRange = document.querySelector("#end");
        endLabel.textContent = endRange.value;
        console.log(endRange.value);
        // endValue = endRange.value;
    })
    // return [startValue, endValue];
}

rangeInputManager();

function getInputValues() {
    const textInput = document.querySelector("#input-text");
    const startRange = document.querySelector("#start");
    const endRange = document.querySelector("#end");

    // Whitespace-ek levágása a szöveg elejéről és végéről
    const trimmedText = textInput.value.trim();

    // Csak a betűk kiszűrése (a szóközöket és egyéb karaktereket nem számoljuk)
    const lettersOnly = trimmedText.replace(/[^a-zA-ZáéíóóöőúúüűÁÉÍÓÓÖŐÚÚÜŰ]/g, "");

    // Validáció: legalább 6 betűt kell tartalmaznia
    if (lettersOnly.length < 6) {
        alert("A megadott szövegnek legalább 6 betűt kell tartalmaznia!");
        return null;
    }

    return {
        text: trimmedText,
        letterCount: lettersOnly.length,
        start: parseInt(startRange.value, 10),
        end: parseInt(endRange.value, 10)
    };
}

function textManipulation() {
    if (!data) return null;

    // Szeletelés a slice segítségével a megadott Kezdet (start) és Vég (end) értékek alapján
    const slicedText = data.text.slice(data.start, data.end);

    return {
        slicedText: slicedText,
        letterCount: data.letterCount
    };
}

function showResult() {
    if (!result) return;

    const outputInput = document.querySelector("#output-text");
    const charCountHeading = document.querySelector("h3");

    // Szeletelt szöveg kiírása az output mezőbe
    outputInput.value = result.slicedText;

    // Karakterek (betűk) számának megjelenítése a H3 elemben
    charCountHeading.textContent = `Karakterek száma: ${result.letterCount}`;
}

// Itt a program belépési pontja, a "bekapcsoló-gomb":
function analysisBtnHandler() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        // getInputValues();
    })
}