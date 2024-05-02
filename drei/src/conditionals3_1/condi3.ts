// Generiere eine Zufallszahl zwischen 1 und 12 und speichere sie in salesMonth
let salesMonth = Math.floor(Math.random() * 12) + 1;

// Switch-Case-Anweisung für die Quartale basierend auf salesMonth
let quarter;
switch (Math.ceil(salesMonth / 3)) {
    case 1:
        quarter = "1. Quartal";
        break;
    case 2:
        quarter = "2. Quartal";
        break;
    case 3:
        quarter = "3. Quartal";
        break;
    case 4:
        quarter = "4. Quartal";
        break;
    default:
        quarter = "Ungültiger Monat";
}

// Ausgabe des ermittelten Quartals in der Konsole
console.log("Für den Monat " + salesMonth + " befinden wir uns im " + quarter);
