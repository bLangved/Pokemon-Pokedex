const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");


function validateForm() {
    event.preventDefault();
    console.clear();

    // First Name
    if(checkLength(firstName.value, 2) === true) {
        firstNameError.style.display = "none";
    }
    else{
        firstNameError.style.display = "block";
        console.log("First Name does not meet criteria for input")
    }
    // Last Name
    if(checkLength(lastName.value, 2) === true) {
        lastNameError.style.display = "none";
    }
    else{
        lastNameError.style.display = "block";
        console.log("Last Name does not meet criteria for input")
    }
    // Address
    if(checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    }
    else{
        addressError.style.display = "block";
        console.log("Address does not meet criteria for input")
    }
    // Email
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
        console.log("Email does not meet criteria for input")
    }
    // Subject / Message
    if(checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
        console.log("Message does not meet criteria for input")
    }
}

form.addEventListener("submit", validateForm);

// Checking the length of the value passed in. 
function checkLength(value, length) {
    if(value.trim().length >= length){
        return true;
    }
    else{
        return false;
    }
}

// Checking the email passed in, to see if if passes validation. 
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}