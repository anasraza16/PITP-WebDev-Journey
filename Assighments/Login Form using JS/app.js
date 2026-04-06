function validateEmail (email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function validatePass (pass) {
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passRegex.test(pass)
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    let userPass = document.getElementById("pass");
    let confirmPass = document.getElementById("c-pass");

    let nameValue = userName.value.trim();
    let emailValue = userEmail.value.trim();
    let passValue = userPass.value.trim();
    let cpassValue = confirmPass.value.trim();

    console.log("Name Value:", nameValue);
    console.log("Email Value:", emailValue);
    console.log("Password Value:", passValue);
    console.log("Confirm Password    Value:", cpassValue);

    if (nameValue === "") {
        alert("Name is required!");
        userName.style.border = "1px solid red";
        return;
    }

    if (emailValue === "") {
        alert("Email is required!");
        userEmail.style.border = "1px solid red";
        return;
    }

    if (passValue === "") {
        alert("Password is required!");
        userPass.style.border = "1px solid red";
        return;
    }

    if (cpassValue === "") {
        alert("Password confirmation is required!");
        confirmPass.style.border = "1px solid red";
        return;
    }

    if (passValue != cpassValue) {
        alert("Password did not match!")
        return;
    }

    if (!validateEmail(emailValue)) {
        alert("Email format is incorrect!")
        return;
    }

    if (!validatePass(passValue)) {
        alert("Password format is incorrect!")
        return;
    }

    alert("Form is submitted!");
});
