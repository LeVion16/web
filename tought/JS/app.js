// Gondolatok tömbje
const gondolatok = [
    "A tudás hatalom.",
    "Lassan járj, tovább érsz.",
    "A gyakorlat teszi a mestert.",
    "Nem mind arany, ami fénylik.",
    "A türelem rózsát terem."
];

// Színek tömbje a véletlenszerű színezéshez
const szinek = ["red", "blue", "green", "orange", "purple", "teal"];

function ujGondolat() {
    // 1. Véletlen gondolat kiválasztása
    const index = Math.floor(Math.random() * gondolatok.length);
    const kivalasztottGondolat = gondolatok[index];

    // 2. Véletlen szín kiválasztása
    const szinIndex = Math.floor(Math.random() * szinek.length);
    const véletlenSzín = szinek[szinIndex];

    // HTML elemek lekérése
    const section = document.getElementById("thought-section");
    const thoughtText = document.getElementById("thought-text");
    const infoIndex = document.getElementById("info-index");
    const infoWords = document.getElementById("info-words");

    // Gondolat kiírása
    thoughtText.innerText = kivalasztottGondolat;

    // --- OPCIÓ A: A szöveg színe legyen véletlenszerű ---
    thoughtText.style.color = véletlenSzín;

    // --- OPCIÓ B: Ha inkább a section háttere legyen véletlenszerű (ha ezt kéri a tanár, töröld a fenti sort és vedd ki az alábbit a kommentből):
    // section.style.backgroundColor = véletlenSzín;

    // 3. Hányadik gondolat íródott ki (1-től számolva az emberi olvashatóságért)
    infoIndex.innerText = "Ez a(z) " + (index + 1) + ". gondolat a tömbben.";

    // 4. Szavak száma split()-tel
    const szavak = kivalasztottGondolat.split(" ");
    infoWords.innerText = "A gondolat " + szavak.length + " szóból áll.";
}

// Oldal betöltésekor egyből jelenjen meg egy gondolat
ujGondolat();