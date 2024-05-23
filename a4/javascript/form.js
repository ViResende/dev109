function validateForm() {
    var valid = true;
    var errorMessages = "";

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;

    // Clear previous error messages
    clearErrors();

    // First Name validation
    if (firstname === "" || !/^[a-zA-Z]+$/.test(firstname) || firstname.length > 20) {
        showError("firstnameError", "First name is required and should be alphabetical with a maximum of 20 characters.");
        valid = false;
    }

    // Last Name validation
    if (lastname === "" || !/^[a-zA-Z]+$/.test(lastname) || lastname.length > 50) {
        showError("lastnameError", "Last name is required and should be alphabetical with a maximum of 50 characters.");
        valid = false;
    }

    // Email validation
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("emailError", "A valid email address is required.");
        valid = false;
    }

    // Phone validation
    if (phone === "" || !/^\d{1,15}$/.test(phone)) {
        showError("phoneError", "Phone number is required and should be numerical with a maximum of 15 digits.");
        valid = false;
    }

    // Username validation
    if (username === "" || username.length > 12) {
        showError("usernameError", "Username is required with a maximum of 12 characters.");
        valid = false;
    }

    // Password validation
    if (password === "" || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}/.test(password)) {
        showError("passwordError", "Password is required with a maximum of 7 characters, including at least 1 upper case letter, 1 lower case letter, 1 number, and 1 special character.");
        valid = false;
    }

    // Address validation
    if (address === "") {
        showError("addressError", "Address is required.");
        valid = false;
    }

    // City validation
    if (city === "") {
        showError("cityError", "City is required.");
        valid = false;
    }

    // State validation
    if (state === "") {
        showError("stateError", "State is required.");
        valid = false;
    }

    // Country validation
    if (country === "") {
        showError("countryError", "Country is required.");
        valid = false;
    }

    // Zip Code validation (only if country is USA)
    if (country === "USA" && (!/^\d{5}$/.test(zipcode))) {
        showError("zipcodeError", "A valid Zip Code is required for USA with a maximum of 5 digits.");
        valid = false;
    }

    return valid;
}

function showError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
    }
}
