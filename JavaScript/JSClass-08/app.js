// let form = document.getElementById("form")

// function validateEmail(email) {
//     let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
//     return emailRegex.test(email)
// }   

// form.addEventListener("submit", function (event) {
//     event.preventDefault()

//     let userName = document.getElementById("name")
//     let email = document.getElementById("email")
//     let password = document.getElementById("password")
//     let confPass = document.getElementById("conf-pass")

//     let nameValue = userName.value
//     let emailValue = email.value
//     let passValue = password.value
//     let ConfpassValue = confPass.value

//     console.log("Name Value:", nameValue);
//     console.log("Email Value:", emailValue);
//     console.log("Password Value:", passValue);
//     console.log("Confirm Password Value:", ConfpassValue);

//     if (nameValue == "") {
//         alert("Name is required")
//         userName.style.border = "1px solid red";
//         return;
//     }

//     if (emailValue == "") {
//         alert("Email is required!")
//         email.style.border = "1px solid red"
//         return;
//     }

//     if (passValue == "") {
//         alert("Password is required!")
//         password.style.border = "1px solid red"
//         return;
//     }

//     if (ConfpassValue == "") {
//         alert("Passwrod Confirmation is required!")
//         confPass.style.border = "1px solid red"
//         return;
//     }

//     if (passValue != ConfpassValue) {
//         alert("Please Cofirm the Password!")
//         return;
//     }

//     if (validateEmail(emailValue) === false) {
//         alert("Incorrect Email")
//         return;
//     }
        
//     alert("Form Submitted!")

// } 