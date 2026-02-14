document.getElementById("btn").addEventListener("click", validateForm);

document.getElementById("phone").addEventListener("keypress", function (event) {
    if (event.charCode < 48 || event.charCode > 57) {
        event.preventDefault();
    }
});

function validateForm() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let userMsg = document.getElementById("userMsg");
    let emailMsg = document.getElementById("emailMsg");
    let phoneMsg = document.getElementById("phoneMsg");
    let passMsg = document.getElementById("passMsg");
    let confirmMsg = document.getElementById("confirmMsg");
    let finalMsg = document.getElementById("finalMsg");

    let valid = true;

    // Username Validation
    if (username === "") {
        userMsg.innerHTML = "Username cannot be empty!";
        userMsg.className = "msg red";
        valid = false;
    } else {
        userMsg.innerHTML = "Correct";
        userMsg.className = "msg green";
    }

    // Email Validation (General Format)
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        emailMsg.innerHTML = "Email cannot be empty!";
        emailMsg.className = "msg red";
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailMsg.innerHTML = "Invalid Email format!";
        emailMsg.className = "msg red";
        valid = false;
    } else {
        emailMsg.innerHTML = "Correct";
        emailMsg.className = "msg green";
    }

    // Phone Validation
    let phoneRegex = /^[0-9]{10}$/;

    if (phone === "") {
        phoneMsg.innerHTML = "Phone cannot be empty!";
        phoneMsg.className = "msg red";
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        phoneMsg.innerHTML = "Phone must be exactly 10 digits!";
        phoneMsg.className = "msg red";
        valid = false;
    } else {
        phoneMsg.innerHTML = "Correct";
        phoneMsg.className = "msg green";
    }

    // Password Validation
    let passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{5,}$/;

    if (password === "") {
        passMsg.innerHTML = "Password cannot be empty!";
        passMsg.className = "msg red";
        valid = false;
    } else if (!passRegex.test(password)) {
        passMsg.innerHTML = "Password must have 7+ chars, 1 Capital, 1 Digit, 1 Special (&,$,#,@)";
        passMsg.className = "msg red";
        valid = false;
    } else {
        passMsg.innerHTML = "Correct";
        passMsg.className = "msg green";
    }

    // Confirm Password Validation
    if (confirmPassword === "") {
        confirmMsg.innerHTML = "Confirm Password cannot be empty!";
        confirmMsg.className = "msg red";
        valid = false;
    } else if (password !== confirmPassword) {
        confirmMsg.innerHTML = "Passwords do not match!";
        confirmMsg.className = "msg red";
        valid = false;
    } else {
        confirmMsg.innerHTML = "Correct";
        confirmMsg.className = "msg green";
    }

    // Final Result
   if (valid) {
    finalMsg.innerHTML = "Login Confirmed ✅";
    finalMsg.style.color = "green";
} else {
    finalMsg.innerHTML = "Login Failed ❌";
    finalMsg.style.color = "red";
}
}