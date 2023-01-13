let nameInput = document.getElementById("ch1Input");
let submitBtn = document.getElementById("ch1SubmitBtn");
let outputTxt = document.getElementById("ch1Txt");

let savedName = "";
let ch1Url = "";

submitBtn.addEventListener("click", function(){
    sayHello(nameInput)
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


function sayHello(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value == ""){ outputTxt.textContent = "Hello"; }
    else {
    if(nameInput.value.match(letters)){
        savedName = nameInput.value;
        ch1Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh1/" + savedName;
        urlCall(ch1Url);
    }else { outputTxt.textContent = "Enter A Valid Name"; }
    }
}
