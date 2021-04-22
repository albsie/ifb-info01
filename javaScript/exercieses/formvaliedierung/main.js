"use strict";

const form = document.getElementById('form');

form.submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    /*
    Vorname Validierung
    */
    if (form.firstname.value.length <= 2 || form.firstname.value.length >= 10) {
        form.firstname.classList.add('is-invalid');
        form.firstname.classList.remove('is-valid');
        form.firstname.nextElementSibling.classList.add('invalid-feedback');
        form.firstname.nextElementSibling.classList.remove('valid-feedback');
        form.firstname.nextElementSibling.text = "Die Zeichenlänge ist nicht korrekt";
        console.log(form.firstname.nextElementSibling);
    } else {
        form.firstname.classList.add('is-valid');
        form.firstname.classList.remove('is-invalid');
    }
});
