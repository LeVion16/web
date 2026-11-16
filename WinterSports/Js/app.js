//Elemek (adatok) kigyujtese:
const form = document.querySelector("#sport-form");
const nameInput = document.querySelector("#name");
const sportInput = document.querySelector("#sport");
const placeInput = document.querySelector("#place");
const cardsContainer = document.querySelector("#cards-container");

let athletes = [];

// Pontszamito fuggveny:
function calculatePoints(place) {
    if (place == 1) return 10;
    if (place == 2) return 6;
    if (place == 3) return 4;
    return 0;
}

// Kártyák kirajzolása a képernyőre:
function renderCards() {
    cardsContainer.innerHTML = "";
    athletes.forEach((athlete) => {
        cardsContainer.innerHTML += `
            <div class="card">
                <h3>Name: ${athlete.name}</h3>
                <h3>Sport: ${athlete.sport}</h3>
                <h3>Place: ${athlete.place}</h3>
                <h3>Points: ${athlete.points}</h3>
            </div>
        `;
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Megakadályozza, hogy újratöltődjön az oldal!

    const name = nameInput.value.trim();
    const sport = sportInput.value.trim();
    const place = placeInput.value;

    // Ellenőrzés, hogy nem üres-e valamelyik mező
    if (name === "" || sport === "") {
        alert("Please fill in both Name and Sport!");
        return;
    }

    // Új versenyző objektum létrehozása
    const newAthlete = {
        name: name,
        sport: sport,
        place: place,
        points: calculatePoints(place)
    };

    athletes.push(newAthlete); // Hozzáadjuk a tömbhöz
    renderCards();             // Újrarajzoljuk a kártyákat
    form.reset();              // Kiürítjük az űrlapot a következő bevitelhez
});