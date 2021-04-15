// Einzeiliger Kommentar
/*
Mehrzeiliger 
Kommentar
*/

/*
Datentypen & Variablen
*/

var name = "Sigi";
let number = 20;
const zahl = 10;
// Variablen werden in JS in der sog. Camel-Case Schreibweise definiert
// Variablen sollten sinnvoll (semantisch) benannt werden
/*
Datentypen
*/

let myString = "String ist eine Zeichenkette"; // String = Zeichenkette; diese Werte müssen ein Anführungszeichen haben;
let myNumber = 20; // Number
let myBoolean = true || false; //Boolean ist ein Wahrheitswert: ja oder nein; //bennant nach George Boole
let myData = null || undefined;

//typeof = kann ein Datentyp überprüffen
// alert() = ist eine Methode ein Fenster zu öffnen
// length = gibt die Länge von einem Datentyp zurück
// window Hauptobjekt von JavaScript
// document beeinhaltet alle HTML Tags und es ist ein Unterobjekt vom window Objekt


/*
Arithmetische Operatoren
+ addiert zwei math. Ausdrücke oder verbindet eine Zeichenkette
- subtrahieren
* multiplizieren
/ dividieren
% Modulo -> Restwertparameter; ermittelt den Rest, der bei einer Division übrig bleibt
*/
let kurs = "Info",
    klass = 2;
document.querySelector("h1").innerHTML = `Hallo ${kurs}${klass} wie geht es euch?`; // neue Schreibweise für Zeichenketten

/* Logischen Operatoren*/

// = (ist kein logischer Operator) - definiert einen Wert
// == prüft nur den Wert
// === prüft den Wert UND den Typ
// || Oder-Operator
// && UND-Operatur
// != true, wenn die Werte ungleich sind
// !== true, wenn die Werte UND die Typen ungleich sind
// ! NOT-Operator

/* Vergleichsoperatoren */

// a > b true, wenn a größer ist als b
// a < b true, wenn b größer ist als a
// a >= b true, wenn a größer oder gleich b
// a <= b true, wenn a kleiner oder gleich b

/* Verkettungsoperatoren */

// StringA + StringB verkettet zwei Strings

/* Statements sind Schlüsselwörter, die wir beim Programmieren verwenden 
if, else, else if, for, while, do while
*/

let title = "Mr";

if (title === "Mrs") {
    // console.log("Sehr geehrte Frau");
} else if (title === "Mr") {
    //console.log("Sehr geehrter Herr");
} else if (title === "other") {
    //console.log("Lieber Gast");
} else {
    //console.log("Leider kein Treffer");
}

// Ternäre Ausdruck

/*
title === "Mrs" ? console.log("Sehr geehrte Frau") :
    title === "Mr" ? console.log("Sehr geehrter Herr") :
    title === "other" ? console.log("Lieber Gast") :
    console.log("Leider kein Treffer");
*/

//zahl === 10 ? console.log("Richtig") : console.log("Falsch"); // Schreibweise 1
//console.log(zahl === 10 ? "Richtig" : "Falsch"); // Schreibweise 2

// Äquivalent

switch (title) {
    case "Mrs":
        //console.log("Sehr geehrte Frau");
        break;
    case "Mr":
        //console.log("Sehr geehrter Herr");
        break;
    case "other":
        //console.log("Lieber Gast");
        break;
    default:
        //console.log("Leider kein Treffer");
}

/* Schleifn - loop */

/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
*/

//for - Schleife

/*
for([Initialiesierung]; [Abbruchbedingung], [Schleifenanweisung]){
[Anweisung]
}
*/

for (let i = 0; i <= 10; i += 5) {
    //console.log(i);
}

// while - Schleife
/*
[Initialiesierung]
while ([Abbruchsbedingung]) {
      [Schleifenanweisung]
        [Anweisung]
}
*/


let i = 0;
while (i <= 10) {
    //console.log(i);
    i++;
}


// do while - Schleife

/*
[Initialiesierung]
do{
[Schleifenanweisung]
} while ([Abbruchbedingung]){
// Anweisung
}
*/

i = 0;
do {
    //console.log(i);
    i++
} while (i <= 100)


/* Kompexe Datentypen */
// Array


/*
Array sind Listen, die aus mehreren Stellen bestehen
Eine Stelle hat immer einen Index
Arrays beginnen mit Index 0
*/

let fruits = ["Apfel", "Birne", "Kiwi"];
// Element hinzufügen => wird am Ende eingefügt
fruits.push("Banana");
// erstes Element ausgeben
// console.log(fruits[0]);
// letztes Element des Arrays augeben
//console.log(fruits[fruits.length-1]);
// Element am Anfang des Array einfügen
fruits.unshift("Kirsche");
// erstes Element löschen
fruits.shift();
// letzes Element löschen
fruits.pop();
// Belibiges Element löschen - splice(Index, Anzahl der löschenden Elemente)
fruits.splice(1, 1);
// Array kopieren
let fruchtkorb = fruits.slice();

fruits.push("Banana", "Kirschen", "Coco");

for (let i = 0; i < fruits.length; i++) {
    //console.log("ich esse" + fruits[i] + "weil ich sie gerne habe");
}

/* 
1. Definieren ein Array Autos 
2. Füge mit push 5 Autos zum Array autos
3. Lösche das Auto in der mitte des Array wieder raus
4. Gib das Array mit folgendem Text aus: Ich fahre ein [autos], und fährt sich sehr gut. 
*/
let autos = ["BMW", "Ford"];
autos.push("Mizu", "Skoda", "Camo", "Audi");

autos.splice(4, 1);
for (let i = 0; i < autos.length; i++) {
    let text1 = "ich fahre ein " + autos[i] + ", und fährt sich sehr gut.",
        text2 = `Ich fahre ein ${autos[i]}, und fährt sich sehr gut.`;
    //console.log(text);
}


// Objekte
// Objekte bestehen aus Schlüssel - Wert - Paaren
// Objekte können Eigenschaften und Methoden enthalten

let person = {
    name: "Sigi",
    role: "teacher",
    age: 21,
    place: "Italy"
}
//console.log("Der Name ist " + person.name + " und ist " + person.age + " Jahre alt");

person.car = "Opel";
person.pc = "Lenovo";

let car = new Object();

car.color = "red";
car["type"] = "cabrio";

/* Funktionen in JS */
// dienen zum Auslagern von wiederholenden Prozeduren

// let [funkionsname] = function ([Argumente/Parameter]){
//funktion
//}

let sum = function (a, b) {
    console.log(a + b);
}

// Schreibe eine Funktion "greed", die einen Namen als Parameter übergibt
// in der conole soll folgendes ausgegeben werden: Hallo [Name];

let greed = function (name) {
    console.log("Hallo " + name);
}
//greed("Adrian");
//greed("Felix");

let summerize = function (a, b) {
    return a + b;
}
//console.log(summerize(5, 10));

// Die geschweiften Klammern und das "return" Wort können weckgelassen werden. 
// let summerize = (a,b) => a+b;
// Mit nur einem Parameter kann man auch die runden Klammern wecklassen
// let greed = name => "Hallo " + name;
