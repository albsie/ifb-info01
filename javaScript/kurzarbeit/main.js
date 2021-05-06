/*
Alber Sieghard
*/

// 2.
let myString = 5;
const name = "Gustav";

// 3. Chris

let days = ["Montag", "Dienstag", "Mittwoch"];

// 4. Felix

days.push("Freitag");
days.unshift("Sonntag");

// 5. Tobias
days.splice(2, 1);

// 6. Max
i = 0;
do {
    //console.log(days);
    i++
} while (i <= 10)
//console.log(days);

for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}

// 7. Michael

let data = {}
data.day = 6;
data.month = 5;
data.year = 2021;
console.log(`${data.day}.${data.month}.${data.year}`);

// 8. Philipp

/*
Aufgabe: Wenn die Variable "zahl" kleiner ist als 10, dann soll in der console "Dringend bestehlen" ausgegeben werden. Wenn "zahl" größer gleich 10 und kleiner ist als 50 dann soll in der console "Menge OK" ausgegeben werden. Wenn "zahl" größer gleich 50 ist, dann soll in der console "reichlich vorhanden" ausgegeben werden.
*/
let zahl = 5;
if (zahl < 10) {
    console.log("Dringend bestellen");
    console.log("Noch etwas");
} else if (zahl >= 10 && zahl < 50)
    console.log("Menge OK");
else if (zahl >= 50)
    console.log("reichlich vorhanden");

console.log(zahl < 10 ? "Dringend bestellen" : zahl >= 10 && zahl < 50 ? "Menge OK" : zahl >= 50 ? "reichlich vorhanden" : "");


// 9. Nando
//Schreibe eine Funktion die jede Zahl um 1 verkleinert. zB. 10 - 1 = 9. Gib das Ergebnis in der console aus.


let zahlen = function (b) {
    return b - 1;
}
console.log(zahlen(10));


// 10. Killian
var islooping = true;
var loopcount = 0;
var text = "*";

while (islooping) {
    console.log(text);
    if (loopcount == 9) {
        islooping = false;
    } else {
        text = (text + "*")
    }
    loopcount++
}


let zeichen = "";
for (let i = 0; i <= 10; i++) {
    console.log(zeichen += "*");
}









// Schluss
