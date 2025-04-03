window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) { // Change color after 50px scroll
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
let eyeIcon1 = document.getElementById("eyeIcon1");
let eyeIcon2 = document.getElementById("eyeIcon2");
let createPass = document.getElementById('create-password')
let confirmPass = document.getElementById('confirm-password')
eyeIcon1.addEventListener('click',function(){
    if (createPass.type === "password") {
        createPass.type = "text";
        eyeIcon1.src = "..//image/view.png"; // Change to closed eye image
    } else {
        createPass.type = "password";
        eyeIcon1.src = "..//image/eye.png"; // Change back to open eye image
    }
  
})
eyeIcon2.addEventListener('click',function(){
    if (confirmPass.type === "password") {
        confirmPass.type = "text";
        eyeIcon2.src = "..//image/view.png"; // Change to closed eye image
    } else {
        confirmPass.type = "password";
        eyeIcon2.src = "..//image/eye.png"; // Change back to open eye image
    }
  
})

const SignUp = document.getElementById('SignUp-button');
SignUp.addEventListener('click',function(){
    const emailInput = document.getElementById('email').value;
    let createPass = document.getElementById('create-password').value
    let confirmPass = document.getElementById('confirm-password').value
    const emailError = document.getElementById('emailError')
    const createPassError = document.getElementById('create-pass-error')
    const confirmPassError = document.getElementById('confirm-pass-error')
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Proper email validation
    const passRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric only

    // Reset error messages
    emailError.innerHTML = "";
    createPassError.innerHTML = "";
    confirmPassError.innerHTML = "";

    let isValid = true; // To track validation state

    // Email validation
    if (!emailRegex.test(emailInput)) {
        emailError.innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    if (!passRegex.test(createPass)) {
        createPassError.innerHTML = "Please enter only alphanumeric characters.";
        isValid = false;
    }

    // Confirm password validation
    if (createPass !== confirmPass) {
        confirmPassError.innerHTML = "Passwords do not match.";
        isValid = false;
    }

   

    if (isValid) {
        window.location.href = "login.html";
    }
})