let ch7Input = document.getElementById("ch7Input");
let submitBtn = document.getElementById("ch7SubmitBtn")
let outputTxt = document.getElementById("ch7Txt");

let savedWord = "";
let ch7Url = "";

submitBtn.addEventListener("click", function() {
    reverseIt(ch7Input)
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

function reverseIt(ch7Input){
    var letters = /^[A-Za-z]+$/;
    if (ch7Input.value == "") { outputTxt.textContent = "tI esreveR"; }
    else {
        if(ch7Input.value.match(letters)) {
            savedWord = ch7Input.value;
            ch7Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh7/" + savedWord;
            urlCall(ch7Url);
        } else { outputTxt.textContent = "Enter A Valid Word"; }
    }
}