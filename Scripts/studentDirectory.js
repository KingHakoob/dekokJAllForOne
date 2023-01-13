let ch8Input = document.getElementById("ch8Input");
let firstNameBtn = document.getElementById("ch8FirstNameBtn");
let lastNameBtn = document.getElementById("ch8LastNameBtn");
let slackNameBtn = document.getElementById("ch8SlackNameBtn");
let emailBtn = document.getElementById("ch8EmailBtn");
let submitBtn = document.getElementById("ch8SubmitBtn");
let firstNameTxt = document.getElementById("ch8FirstNameTxt");
let lastNameTxt = document.getElementById("ch8LastNameTxt");
let slackNameTxt = document.getElementById("ch8SlackNameTxt");
let emailTxt = document.getElementById("ch8EmailTxt");
let hobbiesTxt = document.getElementById("ch8HobbiesTxt");

let btnChoice = "";
let savedInput = "";
let ch8Url = "";

firstNameBtn.addEventListener("click", function () {
    firstNameBtn.className = "ch8BtnLook btn btn-primary ch8Active";
    lastNameBtn.className = "ch8BtnLook btn btn-primary";
    slackNameBtn.className = "ch8BtnLook btn btn-primary";
    emailBtn.className = "ch8BtnLook btn btn-primary";
})

lastNameBtn.addEventListener("click", function () {
    firstNameBtn.className = "ch8BtnLook btn btn-primary";
    lastNameBtn.className = "ch8BtnLook btn btn-primary ch8Active";
    slackNameBtn.className = "ch8BtnLook btn btn-primary";
    emailBtn.className = "ch8BtnLook btn btn-primary";
})

slackNameBtn.addEventListener("click", function () {
    firstNameBtn.className = "ch8BtnLook btn btn-primary";
    lastNameBtn.className = "ch8BtnLook btn btn-primary";
    slackNameBtn.className = "ch8BtnLook btn btn-primary ch8Active";
    emailBtn.className = "ch8BtnLook btn btn-primary";
})

emailBtn.addEventListener("click", function () {
    firstNameBtn.className = "ch8BtnLook btn btn-primary";
    lastNameBtn.className = "ch8BtnLook btn btn-primary";
    slackNameBtn.className = "ch8BtnLook btn btn-primary";
    emailBtn.className = "ch8BtnLook btn btn-primary ch8Active";
})

submitBtn.addEventListener("click", function () {
    if(firstNameBtn.className == "ch8BtnLook btn btn-primary ch8Active") { btnChoice = "firstName"; }
    else if(lastNameBtn.className == "ch8BtnLook btn btn-primary ch8Active") { btnChoice = "lastName"; }
    else if(slackNameBtn.className == "ch8BtnLook btn btn-primary ch8Active") { btnChoice = "slackName"; }
    else if(emailBtn.className == "ch8BtnLook btn btn-primary ch8Active") { btnChoice = "email"; }
    StudentDirectory(btnChoice, ch8Input);
})

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            firstNameTxt.textContent = data.firstName;
            lastNameTxt.textContent = data.lastName;
            slackNameTxt.textContent = data.slackName;
            emailTxt.textContent = data.email;
            hobbiesTxt.textContent = data.hobbies;

            console.log(data);
        }
    )
}


function StudentDirectory(btnChoice, ch8Input) {
    savedInput = ch8Input.value;
    ch8Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh8/" + btnChoice + "/" + savedInput;
    urlCall(ch8Url);
}