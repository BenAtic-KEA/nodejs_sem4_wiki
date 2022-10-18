
function login(){
    let userInput = document.getElementById("username");
    let pwInput = document.getElementById("InputPassword");
    console.log(userInput + "  " + pwInput)
    localStorage.setItem("username", userInput.value)
    localStorage.setItem("pw",pwInput.value)
}