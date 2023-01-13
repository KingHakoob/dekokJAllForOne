// function greaterThanOrLessThan(){
//     fetch("https://jacoblv2.azurewebsites.net/AllInOne/MiniCh4/9/3").then(
//         response => response.text()
//     ).then(
//         data => console.log(data)
//     )
// }

// greaterThanOrLessThan();

let input1 = document.getElementById("ch4Input1");
let input2 = document.getElementById("ch4Input2");
let submitBtn = document.getElementById("ch4SubmitBtn");
let outputTxt = document.getElementById("ch4Txt");

let savedNum1 = 0;
let savedNum2 = 0;
let ch4Url = "";

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
    ch4Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh4/" + savedNum1 + "/" + savedNum2;
    urlCall(ch4Url);
    } else {
        outputTxt.textContent = "Enter Valid Numbers";
    }
}