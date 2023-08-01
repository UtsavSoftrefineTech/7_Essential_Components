// Function to validate the form
function validate() {
  let isValid = true;

  // Reset all error messages
  const errorElements = document.querySelectorAll(".errors");
  for (const errorElement of errorElements) {
    errorElement.textContent = "";
  }

  // First Name Validation
  const fnameInput = document.getElementById("fname");
  const fnameError = fnameInput.nextElementSibling;
  if (fnameInput.value.trim() === "") {
    fnameError.textContent = "First Name is required";
    fnameInput.classList.add("error");
    isValid = false;
  } else {
    fnameInput.classList.remove("error");
  }

  // Last Name Validation
  const lnameInput = document.getElementById("lname");
  const lnameError = lnameInput.nextElementSibling;
  if (lnameInput.value.trim() === "") {
    lnameError.textContent = "Last Name is required";
    lnameInput.classList.add("error");
    isValid = false;
  } else {
    lnameInput.classList.remove("error");
  }

  // Company Validation
  const companyInput = document.getElementById("company");
  const companyError = companyInput.nextElementSibling;
  if (companyInput.value.trim() === "") {
    companyError.textContent = "Company is required";
    companyInput.classList.add("error");
    isValid = false;
  } else {
    companyInput.classList.remove("error");
  }

  // Email Validation
  const emailInput = document.getElementById("email");
  const emailError = emailInput.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid Email Address";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.remove("error");
  }

  // Phone Number Validation
  const phoneInput = document.getElementById("phone");
  const phoneError = phoneInput.nextElementSibling;
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.textContent = "Invalid Phone Number";
    phoneInput.classList.add("error");
    isValid = false;
  } else {
    phoneInput.classList.remove("error");
  }

  // Message Validation
  const messageInput = document.getElementById("message");
  const messageError = messageInput.nextElementSibling;
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    messageInput.classList.add("error");
    isValid = false;
  } else {
    messageInput.classList.remove("error");
  }

  return isValid;
}

// Add event listener to the form submit
const contactForm = document.forms["contactForm"];
const allInput = document.getElementsByClassName("remove");

contactForm.onsubmit = function (event) {
  event.preventDefault();
  const isValid = validate();

  if (isValid) {
    // Loop through allInput elements and clear their values

    // First Way
    // for (const input in allInput) {
    //   allInput[input].value = "";
    // }
    for (const input of allInput) {
      input.value = "";
    }

    console.log("Form submitted successfully!");
  } else {
    console.log("Form validation failed!");
  }
};
