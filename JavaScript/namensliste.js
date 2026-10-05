let namen = [];
let schonGewaehlt = [];

function namensliste() {
    let nameEingabe = document.getElementById("nameEingabe");
    let alleGewaehltAusgabe = document.getElementById("alleGewaehltAusgabe");

    if (nameEingabe.value.trim() !== "") {
        namen.push(nameEingabe.value.trim());

        nameEingabe.value = "";
        alleGewaehltAusgabe.innerHTML = "";
        aktualisiereAnsicht();
    }
}

function loeschen(index) {
    namen.splice(index, 1);

    aktualisiereAnsicht();
}

function aktualisiereAnsicht() {
    let nameAusgabe = document.getElementById("nameAusgabe");
    let anzahlAusgabe = document.getElementById("anzahlAusgabe");
    nameAusgabe.innerHTML = "";

    for (let i = 0; i < namen.length; i++) {
        let li = document.createElement("li");
        li.textContent = namen[i] + "  ";
        li.id = "name-" + i;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Löschen";
        deleteBtn.addEventListener("click", () => loeschen(i))
        li.appendChild(deleteBtn);
        nameAusgabe.appendChild(li);
    }

    anzahlAusgabe.textContent = "Anzahl: " + namen.length;
}

function zufall() {
    let alleGewaehltAusgabe = document.getElementById("alleGewaehltAusgabe");
    if (namen.length === 0) return;
    if (schonGewaehlt.length === 0) {
        alleGewaehltAusgabe.innerHTML = "";
        schonGewaehlt = new Array(namen.length).fill(false);
        aktualisiereAnsicht();
    }
    let zufallsIndex = Math.floor(Math.random() * namen.length);
    while (schonGewaehlt[zufallsIndex] === true) {
        zufallsIndex = Math.floor(Math.random() * namen.length);
    }
    schonGewaehlt[zufallsIndex] = true;
    aktualisiereAnsicht();
    let markiertesElement = document.getElementById("name-" + zufallsIndex);
    if (markiertesElement) {
        markiertesElement.style.color = "red";
        markiertesElement.style.fontWeight = "bold";
    }
    const nowAllTrue = schonGewaehlt.length === namen.length && schonGewaehlt.every(item => item === true);
    if (nowAllTrue) {
        alleGewaehltAusgabe.innerHTML = "Alle wurden einmal ausgewählt.";
        schonGewaehlt = [];
    }
}

function zuruecksetzen() {
    let alleGewaehltAusgabe = document.getElementById("alleGewaehltAusgabe");
    alleGewaehltAusgabe.innerHTML = "";
    if (namen.length === 0) return;
    schonGewaehlt = [];
    aktualisiereAnsicht();
    for (let i = 0; i < namen.length; i++) {
        let element = document.getElementById("name-" + i);
        if (element) {
            element.style.color = "black";
            element.style.fontWeight = "normal";
        }
    }
}