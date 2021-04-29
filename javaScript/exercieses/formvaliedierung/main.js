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

        if(form.passwordRpt.value !== form.password.value){
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
    if(!emailIsValid(form.email.value)){
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

    console.log(form.country.value);

    /*
    Wenn es keine Fehler mehr gibt, dann lade die info.html
    */
    if(errors === 0){
      window.location.href = "info.html";
    }
});

/*
Email Validation Regex
*/
function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}
