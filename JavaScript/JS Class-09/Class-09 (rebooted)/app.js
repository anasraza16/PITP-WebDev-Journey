let form = document.getElementById("form");

function validatePassword(pass) {
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return passwordRegex.test(pass)
}

function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return passwordRegex.test(email)
}

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let userName = document.getElementById("s-name")
    let userEmail = document.getElementById("s-email")
    let pass = document.getElementById("s-pass")
    let cPass = document.getElementById("c-pass")

    userName.style.border = "";
    userEmail.style.border = "";
    pass.style.border = "";
    cPass.style.border = "";

    let nameValue = userName.value
    let emailValue = userEmail.value
    let passValue = pass.value
    let confPassValue = cPass.value

    console.log("Name Value: ", nameValue);
    console.log("Email Value: ", emailValue);
    console.log("Password Value: ", passValue);
    console.log("Confirm Password Value: ", confPassValue);



    if (nameValue == "") {
        alert("Name is Required!")
        userName.style.border="1px solid red"
        return;
    }

    
    if (emailValue == "") {
        alert("Email is Required!")
        userEmail.style.border="1px solid red"
        return;
    }

    if (passValue == "") {
        alert("Password is required!")
        pass.style.border="1px solid red"
        return;
    }

    if (confPassValue == "") {
        alert("Password Reconfirmation is Required!")
        cPass.style.border="1px solid red"
        return;
    }

    if (passValue !== confPassValue) {
        alert("Passwords do not match!");
        return;
    }

    if (validateEmail(emailValue) == false) {
        alert("Email is not in correct format!")
        return;
    }

    if (validatePassword(passValue) == false) {
        alert("Password is not in correct format!")
        return;
    }

    alert("Subumitted Successfully");

})

