function zahlencheck() {
    let zahlEingabe = document.getElementById("zahlEingabe");
    let zahlAusgabe = document.getElementById("zahlAusgabe");
    let positivneutralnegativAusgabe = document.getElementById("positivneutralnegativAusgabe");
    let geradeungeradeAusgabe = document.getElementById("geradeungeradeAusgabe");
    let quadratAusgabe = document.getElementById("quadratAusgabe");
    let zahlenkleineralsdiezahlabergroeßeralsnullAusgabe = document.getElementById("zahlenkleineralsdiezahlabergroeßeralsnullAusgabe");
    let teilerAusgabe = document.getElementById("teilerAusgabe");
    let primzahlAusgabe = document.getElementById("primzahlAusgabe");
    let zahlenSummeAusgabe = document.getElementById("zahlenSummeAusgabe");

    zahlAusgabe.textContent = "";
    positivneutralnegativAusgabe.textContent = "";
    geradeungeradeAusgabe.textContent = "";
    quadratAusgabe.textContent = "";
    zahlenkleineralsdiezahlabergroeßeralsnullAusgabe.textContent = "";
    teilerAusgabe.textContent = "";
    primzahlAusgabe.textContent = "";
    zahlenSummeAusgabe.textContent = "";

    let eingabeText = zahlEingabe.value.trim();

    if (eingabeText === "" || isNaN(Number(eingabeText)) || !Number.isInteger(Number(eingabeText))) {
        zahlAusgabe.textContent = "Bitte gib eine ganze Zahl ein";
        return;
    }

    let zahl = Number(eingabeText);


    if (zahl > 0) {
        positivneutralnegativAusgabe.textContent = "Die Zahl " + zahl + " ist positiv";
    } else if (zahl === 0) {
        positivneutralnegativAusgabe.textContent = "Die Zahl " + zahl + " ist neutral";
    } else {
        positivneutralnegativAusgabe.textContent = "Die Zahl " + zahl + " ist negativ";
    }

    if (zahl % 2 === 0) {
        geradeungeradeAusgabe.textContent = "Die Zahl " + zahl + " ist gerade";
    } else {
        geradeungeradeAusgabe.textContent = "Die Zahl " + zahl + " ist ungerade";
    }
    quadratAusgabe.textContent = "Das Quadrat von " + zahl + " ist: " + zahl * zahl;

    let zahlenListe = [];
    if (zahl > 1) {
        for (let i = 1; i <= zahl; i++) {
            zahlenListe.push(i);
        }
        zahlenkleineralsdiezahlabergroeßeralsnullAusgabe.textContent = "Alle Zahlen von 1 bis " + zahl + " sind: " + zahlenListe.join(", ");
    } else {
        zahlenkleineralsdiezahlabergroeßeralsnullAusgabe.textContent = "Es gibt keine Zahlen von 1 bis " + zahl + " (Da sie kleiner als 2 ist)";
    }

    let teilerListe = [];
    if (zahl === 0) {
        teilerAusgabe.textContent = "Die Zahl " + zahl + " hat unendlich Teiler";
    } else {
        let absoluteZahl = Math.abs(zahl);
        for (let i = absoluteZahl; i >= 1; i--) {
            if (absoluteZahl % i === 0) {
                teilerListe.push(-i);
            }
        }
        for (let i = 1; i <= absoluteZahl; i++) {
            if (absoluteZahl % i === 0) {
                teilerListe.push(i);
            }
        }
        teilerAusgabe.textContent = "Die Teiler von " + zahl + " sind: " + teilerListe.join(", ");
    }

    if (zahl < 0) {
        primzahlAusgabe.textContent = "Die Zahl " + zahl + " ist keine Primzahl (weil sie negativ ist)"
    } else if (teilerListe.length === 4) {
        primzahlAusgabe.textContent = "Die Zahl " + zahl + " ist eine Primzahl";
    } else {
        primzahlAusgabe.textContent = "Die Zahl " + zahl + " ist keine Primzahl";
    }

    if (zahl > 0) {
        let summeallerzahlenzwischeneinsundderzahl = (zahl * (zahl + 1)) / 2;
        zahlenSummeAusgabe.textContent = "Die Summe aller Zahlen von 1 bis " + zahl + " ist: " + summeallerzahlenzwischeneinsundderzahl;
    } else {
        zahlenSummeAusgabe.textContent = "Die Summe aller Zahlen von 1 bis " + zahl + " ist nicht definiert (Weil sie kleiner als 1 ist)";
    }
}
