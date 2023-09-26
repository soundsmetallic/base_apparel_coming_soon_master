const input = document.querySelector("input");
const warning = document.querySelector(".warning");
const errorMsg = document.querySelector(".error-message");
const btn = document.querySelector("button");
const email = document.getElementById("email");

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed email address.
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
        email.className = "valid";
        errorMsg.textContent = "";
        errorMsg.className = "error-message";
        warning.style.display = 'none';

    } else {
        email.className = "invalid";
    }
});
// This defines what happens when the user tries to submit the data
btn.addEventListener("click", (event) => {
    event.preventDefault();

    const isValid = email.value.length === 0 || emailRegExp.test(email.value);

    if (email.value.length === 0) {
        errorMsg.textContent = "Please provide a valid email";
        warning.style.display = 'initial';
    } else if (!isValid) {
        errorMsg.textContent = "Please provide a correctly formatted email address";
        warning.style.display = 'initial';
    }
});