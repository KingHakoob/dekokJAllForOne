let word1Input = document.getElementById("ch5Word1Input");
let word2Input = document.getElementById("ch5Word2Input");
let word3Input = document.getElementById("ch5Word3Input");
let word4Input = document.getElementById("ch5Word4Input");
let word5Input = document.getElementById("ch5Word5Input");
let word6Input = document.getElementById("ch5Word6Input");
let word7Input = document.getElementById("ch5Word7Input");
let word8Input = document.getElementById("ch5Word8Input");
let word9Input = document.getElementById("ch5Word9Input");
let word10Input = document.getElementById("ch5Word10Input");
let submitBtn = document.getElementById("ch5SubmitBtn");
let outputTxt = document.getElementById("ch5Txt");

let savedWord1 = "";
let savedWord2 = "";
let savedWord3 = "";
let savedWord4 = "";
let savedWord5 = "";
let savedWord6 = "";
let savedWord7 = "";
let savedWord8 = "";
let savedWord9 = "";
let savedWord10 = "";
let ch5Url = "";

submitBtn.addEventListener("click", function(){
    madLib(word1Input, word2Input, word3Input, word4Input, word5Input, word6Input, word7Input, word8Input, word9Input, word10Input)
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

function madLib(){
    var letters = /^[A-Za-z]+$/;
    if(word1Input.value == "" && word2Input.value == "" && word3Input.value == "" && word4Input.value == "" && word5Input.value == "" && word6Input.value == "" && word7Input.value == "" && word8Input.value == "" && word9Input.value == "" && word10Input.value == "") { outputTxt.textContent = "Fill In The Mad Lib"; }
    else if(word1Input.value == "" || word2Input.value == "" || word3Input.value == "" || word4Input.value == "" || word5Input.value == "" || word6Input.value == "" || word7Input.value == "" || word8Input.value == "" || word9Input.value == "" || word10Input.value == "") { outputTxt.textContent = "Fill In The Whole Mad Lib"; }
    else {
        if (word1Input.value.match(letters) && word2Input.value.match(letters) && word3Input.value.match(letters) && word4Input.value.match(letters) && word5Input.value.match(letters) && word6Input.value.match(letters) && word7Input.value.match(letters) && word8Input.value.match(letters) && word9Input.value.match(letters) && word10Input.value.match(letters)) {
            savedWord1 = word1Input.value;
            savedWord2 = word2Input.value;
            savedWord3 = word3Input.value;
            savedWord4 = word4Input.value;
            savedWord5 = word5Input.value;
            savedWord6 = word6Input.value;
            savedWord7 = word7Input.value;
            savedWord8 = word8Input.value;
            savedWord9 = word9Input.value;
            savedWord10 = word10Input.value;
            ch5Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh5/" + savedWord1 + "/" + savedWord2 + "/" + savedWord3 + "/" + savedWord4 + "/" + savedWord5 + "/" + savedWord6 + "/" + savedWord7 + "/" + savedWord8 + "/" + savedWord9 + "/" + savedWord10;
            urlCall(ch5Url);
        } else { outputTxt.textContent = "Enter Valid Words For The Mad Lib"; }
    }
}