// function addingTwoNumbers(){
//     // fetch("https://api.adviceslip.com/advice").then(
//     fetch("https://jacoblv2.azurewebsites.net/AllInOne/MiniCh2/45/40").then(
//         response => response.text()
//     ).then(
//         // data => injectHere.innerHTML = data.slip.advice
//         data => console.log(data)
//     )
// }

// addingTwoNumbers();

let input1 = document.getElementById("ch2Input1");
let input2 = document.getElementById("ch2Input2");
let submitBtn = document.getElementById("ch2SubmitBtn");
let outputTxt = document.getElementById("ch2Txt");

let savedNum1 = 0;
let savedNum2 = 0;
let ch2Url = "";

submitBtn.addEventListener("click", function(){
        AddingTwoNumbers(input1, input2)
    
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

function AddingTwoNumbers(input1, input2){
    if(Number(input1.value) && Number(input2.value)) {
    savedNum1 = Number(input1.value);
    savedNum2 = Number(input2.value);
    ch2Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh2/" + savedNum1 + "/" + savedNum2;
    urlCall(ch2Url);
    } else {
        outputTxt.textContent = "Enter Valid Numbers";
    }
}