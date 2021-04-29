"use strict";

const form = document.getElementById('form');

form.submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let errors = 0;
    /*
    Vorname Validierung
    */
    if (form.firstname.value.length <= 2 || form.firstname.value.length >= 10) {
        errors++;
        form.firstname.classList.add('is-invalid');
        form.firstname.classList.remove('is-valid');
        form.firstname.nextElementSibling.classList.add('invalid-feedback');
        form.firstname.nextElementSibling.innerText = "Die Zeichenlänge ist nicht korrekt";
    } else {
        form.firstname.classList.add('is-valid');
        form.firstname.classList.remove('is-invalid');
        form.firstname.nextElementSibling.classList.remove('invalid-feedback');
        form.firstname.nextElementSibling.innerText = "";
    }

    /*
    Nachname Validierung
    Aufgabe: Der Nachname soll eine Länge von 2 bis 50 Zeichen haben.
    */

    /*
    Passwort Valiedierung
    Aufgabe: Das Passwort soll eine Länge von 8 bis 50 Zeichen haben.
    */

    /*
    Passwort Wiederholung Valiedierung
    Aufgabe: Die Passwort Wiederholung muss mit dem Passwort identisch sein.
    */

    /*
    Email Valiedierung
    Aufgabe: die Email muss ein @ und ein Punkt enthalten. 
    */

    /*
    Wenn es keine Fehler mehr gibt, dann lade die info.html
    */
    if(errors === 0){
      window.location.href = "info.html";
    }
});
