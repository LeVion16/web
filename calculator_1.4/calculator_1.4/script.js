// Lépések:
/*
1.getValues()-fn.-nyel kinyerjük és validáljuk az értékeket.
2. HA! keletkeztek értékek, akkor a calculate fn-nyel kiszámoljuk azokat.
3. A kiszámolt értéket megjelenítjük a 3. input-ban.
4. Az alkalmazás BELÉPÉSE/START pontja a buttonHandler eljárás, ahol a gomb "életre kel", működni kezd. Gombra kattintva:
    1. Kinyerjük az értékeket.
    2. Ha vannak értékek, akkor számolunk.
    3. Megjelenítjük az eredményt.
 */


function getValues() {
    const n1 = document.querySelector("#n1");
    const n2 = document.querySelector("#n2");
    const select = document.querySelector("select");

    if (!n1 || !n2 || !select) {
        return [];
    }

    const num1 = Number(n1.value);
    const num2 = +n2.value;
    const op = select.value;
    return [num1, op, num2];
}

function calculate(num1, op, num2) {
    /* if (op === "+") {
        return num1 + num2;
    }
    else if (op === "-")
        return num1 - num2; */

    switch (op){
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 === 0 ? null : (num1 / num2).toFixed(3); // Ternary operátor. 
    }
};

function buttonHandler() {
    const button = document.querySelector("button");
    button.addEventListener("click", function(){
        const values = getValues();
        if (values.length !== 0) {
            const number1 = values[0];
            const operator = values[1];
            const number2 = values[2];
            const result = calculate(number1, operator, number2);  // Hositing funkció működik function-ok esetében.
            console.log(result); // Tesztelés
            // const roundResult = Math.round(result); // Egészrészt ad vissza.
            // const roundResult = result.toFixed(3); // "34.567"toFixed(3)  -> string-et ad vissza!!!
            showResult(result);
        }        
            console.log(values);  // Tesztelés   
            // console.log(typeof result); A result tartalma itt talán null.
            // showResult(result);         
    })
}

// Alkalmazás belépési pontja: buttonHandler-függvény:
buttonHandler();

// Jelenítsd meg a showResult() függvénnyel az eredményt a result id-jú input-ban! Kell paraméter a függvénynek??
function showResult(result) {
    // Elérjük a result id-jú elemet.
    const resultHTML = document.querySelector("#result");
    // Az elem value attribútumának értékül adjuk a result-ot.
    resultHTML.value = result;
    // Hova kerüljön a függvényhívás???
}

