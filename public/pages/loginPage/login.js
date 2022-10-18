
function login(){
    let userInput = document.getElementById("username");
    let pwInput = document.getElementById("InputPassword");
    console.log(userInput + "  " + pwInput)
    sessionStorage.setItem("username", userInput.value)
    sessionStorage.setItem("pw",pwInput.value)
}