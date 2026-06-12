const loginForm =
document.getElementById("loginForm");

const passwordField =
document.getElementById("password");

const showPassword =
document.getElementById("showPassword");

showPassword.addEventListener("change", () => {

    passwordField.type =
    showPassword.checked
    ? "text"
    : "password";

});

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const storedUser =
    JSON.parse(
        localStorage.getItem("agriUser")
    );

    if(!storedUser){

        alert("No account found!");

        return;
    }

    if(
        email === storedUser.email &&
        password === storedUser.password
    ){

        alert("Login Successful");

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        window.location.href =
        "dashboard.html";

    }
    else{

        alert(
            "Invalid Email or Password"
        );

    }

});