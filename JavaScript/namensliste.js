let namen = [];

function namensliste() {
    let nameEingabe = document.getElementById("nameEingabe");
    let nameAusgabe = document.getElementById("nameAusgabe");
    
    namen.push(nameEingabe.value);
    
    nameAusgabe.textContent = "Deine Namen: " + namen.join(", ");
    
    nameEingabe.value = "";
}