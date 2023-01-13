let nameInput = document.getElementById("ch3NameInput");
let foodInput = document.getElementById("ch3FoodInput");
let submitBtn = document.getElementById("ch3SubmitBtn");
let outputTxt = document.getElementById("ch3Txt");

let savedName = "";
let savedFood = "";
let ch3Url = "";

submitBtn.addEventListener("click", function () {
    askingQuestions(nameInput, foodInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            outputTxt.textContent = data;
            console.log(data);
        }
    )
}

function askingQuestions(nameInput, foodInput) {
    var letters = /^[A-Za-z ]+$/;
    if (nameInput.value == "" && foodInput.value == "") { outputTxt.textContent = "Hello! What is your name and your favorite food?"; }
    else if (nameInput.value == "" && foodInput.value !== "") {
        if (foodInput.value.match(letters)) {
            savedFood = foodInput.value;
            outputTxt.textContent = "I don't know your name, but your favorite food is " + savedFood;
        } else { outputTxt.textContent = "Enter A Valid Name And Food"; }
    } else if (nameInput.value !== "" && foodInput.value == "") {
        if (nameInput.value.match(letters)) {
            savedName = nameInput.value;
            outputTxt.textContent = "Hello " + savedName + ", we still don't know your favorite food";
        } else { outputTxt.textContent = "Enter A Valid Name And Food"; }
    } else {
        if (nameInput.value.match(letters) && foodInput.value.match(letters)) {
            savedName = nameInput.value;
            savedFood = foodInput.value;
            ch3Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh3/" + savedName + "/" + savedFood;
            urlCall(ch3Url);
        } else { outputTxt.textContent = "Enter A Valid Name And Food"; }
    }
}