let weekdayAsNumber: number =1;

let weekdayAsString: string = "hi";

let userInput = window.prompt("Please insert a number from 1 to 7");

weekdayAsNumber = parseInt(userInput);

switch (weekdayAsNumber) {
    case 1:
        weekdayAsString = "Montag";
        break;
    case 2:
        weekdayAsString = "Dienstag";
        break;
    case 3:
        weekdayAsString = "Mittwoch";
        break;
    case 4:
        weekdayAsString = "Donnerstag";
        break;
    case 5:
        weekdayAsString = "Freitag";
        break;
    case 6:
        weekdayAsString = "Samstag";
        break;
    case 7:
        weekdayAsString = "Sonntag";
        break;
    default:
        weekdayAsString = "Ungültige Eingabe";
}

console.log("Der eingegebene Tag als Zahl: " + weekdayAsNumber);
console.log("Der eingegebene Tag als String: " + weekdayAsString);