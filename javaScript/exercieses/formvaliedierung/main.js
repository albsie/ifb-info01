"use strict";

const form = document.getElementById('form'),
      form2 = document.getElementsByClassName('form'),
      form3 = document.getElementsByTagName('form'),
      form4 = document.querySelector('input'), // selectieren wie im CSS
    radioError = document.getElementById('radioErrorText');

console.log(form.submitBtn);


form.submitBtn.addEventListener('click', event => {
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
    if (form.lastname.value.length <= 2 || form.lastname.value.length >= 50) {
        errors++;
        form.lastname.classList.add('is-invalid');
        form.lastname.classList.remove('is-valid');
        form.lastname.nextElementSibling.classList.add('invalid-feedback');
        form.lastname.nextElementSibling.innerText = "Die Zeichenlänge ist nicht korrekt";
    } else {
        form.lastname.classList.add('is-valid');
        form.lastname.classList.remove('is-invalid');
        form.lastname.nextElementSibling.classList.remove('invalid-feedback');
        form.lastname.nextElementSibling.innerText = "";
    }
    /*
    Passwort Valiedierung
    Aufgabe: Das Passwort soll eine Länge von 8 bis 50 Zeichen haben.
    */
    if (form.password.value.length <= 8 || form.password.value.length >= 50) {
        errors++;
        form.password.classList.add('is-invalid');
        form.password.classList.remove('is-valid');
        form.password.nextElementSibling.classList.add('invalid-feedback');
        form.password.nextElementSibling.innerText = "Die Passwortlänge ist nicht korrekt";
        form.passwordRpt.classList.remove('is-invalid');
        form.passwordRpt.classList.remove('is-valid');
        form.passwordRpt.nextElementSibling.classList.remove('invalid-feedback');
        form.passwordRpt.nextElementSibling.innerText = "";
    } else {
        form.password.classList.add('is-valid');
        form.password.classList.remove('is-invalid');
        form.password.nextElementSibling.classList.remove('invalid-feedback');
        form.password.nextElementSibling.innerText = "";

        /*
        Passwort Wiederholung Valiedierung
        Aufgabe: Die Passwort Wiederholung muss mit dem Passwort identisch sein.
        */

        if (form.passwordRpt.value !== form.password.value) {
            errors++;
            form.passwordRpt.classList.add('is-invalid');
            form.passwordRpt.classList.remove('is-valid');
            form.passwordRpt.nextElementSibling.classList.add('invalid-feedback');
            form.passwordRpt.nextElementSibling.innerText = "Die Passwort Wiederholung ist nicht korrekt";
        } else {
            form.passwordRpt.classList.add('is-valid');
            form.passwordRpt.classList.remove('is-invalid');
            form.passwordRpt.nextElementSibling.classList.remove('invalid-feedback');
            form.passwordRpt.nextElementSibling.innerText = "";
        }
    }



    /*
    Email Valiedierung
    Aufgabe: die Email muss ein @ und ein Punkt enthalten.
    */
    if (!emailIsValid(form.email.value)) {
        errors++;
        form.email.classList.add('is-invalid');
        form.email.classList.remove('is-valid');
        form.email.nextElementSibling.classList.add('invalid-feedback');
        form.email.nextElementSibling.innerText = "Die Email Adresse ist nicht korrekt";
    } else {
        form.email.classList.add('is-valid');
        form.email.classList.remove('is-invalid');
        form.email.nextElementSibling.classList.remove('invalid-feedback');
        form.email.nextElementSibling.innerText = "";
    }

    /*
    Selectfeld Validierung
    Aufgabe: 1,2 oder 3 muss ausgewählt sein.
    */
    if (form.country.value === "0") {
        errors++;
        form.country.classList.add('is-invalid');
        form.country.classList.remove('is-valid');
        form.country.nextElementSibling.classList.add('invalid-feedback');
        form.country.nextElementSibling.innerText = "Bitte wählen Sie ein Land";
    } else {
        form.country.classList.add('is-valid');
        form.country.classList.remove('is-invalid');
        form.country.nextElementSibling.classList.remove('invalid-feedback');
        form.country.nextElementSibling.innerText = "";
    }
    /*
    Validierung vom Alter
    Aufgabe: schmeiß einen Fehler wenn kleiner als 18.
    */
    if (form.age.value >= 18) {
        form.age.classList.add('is-valid');
        form.age.classList.remove('is-invalid');
        form.age.nextElementSibling.classList.remove('invalid-feedback');
        form.age.nextElementSibling.innerText = "";
    } else {
        errors++;
        form.age.classList.add('is-invalid');
        form.age.classList.remove('is-valid');
        form.age.nextElementSibling.classList.add('invalid-feedback');
        form.age.nextElementSibling.innerText = "Du musst 18 Jahre alt sein.";
    }
    /*
    Valiedierung Radio Buttons: Ein Feld muss ausgewählt sein.
    */

    if (form.gender.value === "1" || form.gender.value === "2" || form.gender.value === "3") {
        //form.gender.classList.add('is-valid');
        //form.gender.classList.remove('is-invalid');
        radioError.innerText = "";
        radioError.classList.remove('invalid-feedback');
        for (let label of form.gender) {
            label.nextElementSibling.style.color = "#212529";
        }
        form.gender[form.gender.value - 1].nextElementSibling.style.color = "#198754";
    } else {
        errors++;
        //form.gender.classList.add('is-invalid');
        //form.gender.classList.remove('is-valid');
        radioError.innerText = "Wählen Sie Ihr Geschlecht";
        radioError.classList.add('invalid-feedback');
        radioError.style.display = "block";
        //for (let i = 0; i < form.gender.length; i++) {
        //  form.gender[i].nextElementSibling.style.color = "#212529";
        //}
        for (let label of form.gender) {
            label.nextElementSibling.style.color = "#dc3545";
        }
    }

    /*
    Validierung Checkbox: Muss ausgewählt sein.
    */
    console.log(form.chkbox.checked);
    if (form.chkbox.checked) {
        form.chkbox.nextElementSibling.style.color = "#198754";
    } else {
        errors++;
        form.chkbox.nextElementSibling.style.color = "#dc3545";
    }

    /*
    Wenn es keine Fehler mehr gibt, dann lade die info.html
    */
    if (errors === 0) {
        window.location.href = "info.html";
    }
});

/*
Email Validation Regex
*/
function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
}
