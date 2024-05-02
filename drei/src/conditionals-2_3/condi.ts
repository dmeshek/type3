let zahl = 35;

let differenz = Math.abs(zahl - 27);

if (zahl > 27){
    differenz *=2;
}

console.log("Das Ergebnis lautet:", differenz);

//? Function
function berechneDifferenzUndAusgabe(zahl) {
    let differenz = Math.abs(zahl - 27);

    if (zahl > 27) {
        differenz *= 2;
    }

    console.log(`Für die Zahl ${zahl}: Ergebnis = ${differenz}`);
}

berechneDifferenzUndAusgabe(35);
berechneDifferenzUndAusgabe(74);
berechneDifferenzUndAusgabe(123);
