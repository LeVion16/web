function getValues() {
    /*Kiszedi az ertekeket es visszadja egy objektumban(szotarban)*/

    const emailInputHTML = document.querySelector('#email-input');
    const emailOutputHTML = document.querySelector('#email-output');
    const resultTypeHTML = document.querySelector('#result-type');

    if (!emailInputHTML || !emailOutputHTML || !resultTypeHTML) return null;

    return{
        emailInput: emailInputHTML,
        emailOutput: emailOutputHTML,
        resultType: resultTypeHTML.value
    };
}

function textManipulation() {
    const data = getValues();
    if (!data) return;

    // Beolvassuk az input mezőbe írt szöveget
    const inputText = data.emailInput.value;

    switch (data.resultType) {
        case "change-color":
            data.emailOutput.textContent = inputText;
            data.emailOutput.style.color = 'red';
            break;

        case "upper-case":
            data.emailOutput.textContent = inputText.toUpperCase();
            data.emailOutput.style.color = 'inherit'; // Visszaállítja az eredeti színt
            break;

        case "lower-case":
            data.emailOutput.textContent = inputText.toLowerCase();
            data.emailOutput.style.color = 'inherit';
            break;

        default:
            break;
    }
}

function buttonHandler() {
    const btn = document.querySelector("#convert-btn");
    if (btn) {
        btn.addEventListener("click", textManipulation);
    }
}

document.addEventListener("DOMContentLoaded", buttonHandler);