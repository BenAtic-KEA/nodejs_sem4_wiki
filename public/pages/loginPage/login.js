
function login(){
    let userInput = document.getElementById("username");
    let pwInput = document.getElementById("InputPassword");
    sessionStorage.setItem("username", userInput.value)
    sessionStorage.setItem("pw",pwInput.value)
}