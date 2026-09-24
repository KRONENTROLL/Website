function nameEingabeUndAusgabe() {
    let nameEingabe = document.getElementById("nameEingabe");
    let nameAusgabe = document.getElementById("nameAusgabe");
    
    if (nameEingabe.value.trim() === "") {
        nameAusgabe.textContent = "Bitte gib einen Namen ein.";
    } else {
        nameAusgabe.textContent = "Hallo, " + nameEingabe.value + "!";
    }
}
