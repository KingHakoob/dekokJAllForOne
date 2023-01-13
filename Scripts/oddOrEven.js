// function oddOrEven(){
//     fetch("https://jacoblv2.azurewebsites.net/AllInOne/MiniCh6/55").then(
//         response => response.text()
//     ).then(
//         data => console.log(data)
//     )
// }

// oddOrEven();

let ch6Input = document.getElementById("ch6Input")
let submitBtn = document.getElementById("ch6SubmitBtn");
let outputTxt = document.getElementById("ch6Txt");

let savedNum = 0;
let ch6Url = "";

submitBtn.addEventListener("click", function(){
        OddOrEven(ch6Input)
    
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

function OddOrEven(ch6Input){
    if(Number(ch6Input.value)) {
    savedNum = Number(ch6Input.value);
    ch6Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh6/" + savedNum;
    urlCall(ch6Url);
    } else {
        outputTxt.textContent = "Enter A Valid Number";
    }
}