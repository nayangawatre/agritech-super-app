const form = document.getElementById("registerForm");

const password =
document.getElementById("password");

const confirmPassword =
document.getElementById("confirmPassword");

const showPassword =
document.getElementById("showPassword");

showPassword.addEventListener("change", () => {

    const type =
    showPassword.checked
    ? "text"
    : "password";

    password.type = type;
    confirmPassword.type = type;

});

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const user = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        mobile:
        document.getElementById("mobile").value,

        password:
        password.value

    };

    if(password.value !== confirmPassword.value){

        alert("Passwords do not match");
        return;
    }

    localStorage.setItem(
        "agriUser",
        JSON.stringify(user)
    );

    alert("Registration Successful");

    window.location.href =
    "login.html";

});