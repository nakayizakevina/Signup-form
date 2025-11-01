import Validator from "https://cdn.jsdelivr.net/npm/validator@13.15.20/+esm"

const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submitbutton");
const form = document.getElementById("form");

const validateInformation = async (e) => {
    e.preventDefault();

    if(!Validator.isAlpha(firstname.value)){
        console.log("Please put a valid format");
    }

    if(!Validator.isAlpha(lastname.value)){
        console.log("please enter a valid format")
    }
    

    if(!Validator.isEmail(email.value)){
        console.log("Plese enter the standard email pattern")
    }

    if(!Validator.isLength(password.value, {min:8})){
        alert("The password lenght must be 8 characters")
    }


    fetch('https://jsonplaceholder.typicode.com/users',{
        method: "POST",
        headers: {
    'Content-type': 'application/json'},
    body: JSON.stringify({
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value,
      password:password.value
    })
   })

    .then(response => response.json())
     .then(data => {
        console.log("Logged in successfully", data);
     })
     .catch(error => console.log('Error', error))
}

form.addEventListener("submit",validateInformation)