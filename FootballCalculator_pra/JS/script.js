function getValues() {

    const homeGoalsHTML = document.querySelector("#homeGoals");
    const awayGoalsHTML = document.querySelector("#awayGoals");
    const resultTypeHTML = document.querySelector("#resultType");

    if (!homeGoalsHTML || !awayGoalsHTML || !resultTypeHTML) {
        return [];
    }

    const homeGoals = Number(homeGoalsHTML.value);
    const awayGoals = Number(awayGoalsHTML.value);
    const resultType = resultTypeHTML.value;

    return [homeGoals, awayGoals, resultType];
}

// Teszteles -> console.log(getValues());

function calculate() {
    // 1. Kiforgatjuk a tömbből az értékeket:
    const [homeGoals, awayGoals, resultType] = getValues();

    switch (resultType){

        case "points":
            if (homeGoals > awayGoals) {
                return 3;
            } 
            if (homeGoals === awayGoals) {
                return 1;
            }
            else {
                return 0;
            }

        case "status":
            if (homeGoals > awayGoals) {
                return "Hazai gyozelem";
            } 
            if (homeGoals === awayGoals) {
                return "Dontetlen";
            }
            else {
                return "Vendeg gyozelem";
            }

        case "difference":
            if (homeGoals > awayGoals) {
                return homeGoals - awayGoals;
            } 
            if (homeGoals === awayGoals) {
                return 0;
            }
            else {
                return awayGoals - homeGoals;
            }
    }
}

function showResult(result) {
    const resultInput = document.querySelector("#result");
    resultInput.value = result;
}

function buttonHandler() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        const output = calculate();
        showResult(output);
    });
}

buttonHandler();