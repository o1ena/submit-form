var form = document.getElementById("form");
var email = document.getElementById("mail");
var zip = document.getElementById("zip");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var message = document.getElementById("success");
var button = document.getElementById("submit-button");
var form_wrapper = document.getElementById("wrapper");
var success_dialog = document.getElementById("success-dialog");
var try_again = document.getElementById("try-again-button");

email.addEventListener("keyup", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email");
    } else {
        email.setCustomValidity("");
    }
}, false);

zip.addEventListener("keyup", function(event) {
    if (zip.validity.patternMismatch) {
        zip.setCustomValidity("Entered zip code doesn`t match pattern. Should contain numbers only and has length 5 digits at max");
    } else {
        zip.setCustomValidity("")
    }

}, false);

age.addEventListener("keydown", function(event) {
    if (age.validity.rangeOverflow) {
        age.setCustomValidity("User age should be between 1 and 99 range");
    } else {
        age.setCustomValidity("");
    }

}, false);

phone.addEventListener("keyup", function(event) {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Input doesn`t match pattern. Expected phone number in format: ###-###-####");
    } else {
        phone.setCustomValidity("")
    }

}, false);

form.addEventListener("submit", function(event) {
    form.style.visibility = "hidden";
    form_wrapper.style.visibility = "hidden";
    event.preventDefault();
    success_dialog.style.display = "block";
    message.innerHTML = "Your form is successfully submited!";
}, false);

form.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        button.click();
    }
}, false);

try_again.addEventListener("click", function(event) {
    form.style.visibility = "visible";
    form_wrapper.style.visibility = "visible";
    success_dialog.style.display = "none";
}, false);

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        try_again.click();
    }
}, false);