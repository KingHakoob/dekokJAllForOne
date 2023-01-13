let outputTxt = document.getElementById("ch9Txt");
let fastFoodBtn = document.getElementById("ch9FFBtn");
let deliveryBtn = document.getElementById("ch9DBtn");
let dineInBtn = document.getElementById("ch9DIBtn");
let AllThreeBtn = document.getElementById("ch9ABtn");

let btnChoice = "";
let ch9Url = "";

fastFoodBtn.addEventListener("click", function(){
    FastFood()
})

deliveryBtn.addEventListener("click", function(){
    Delivery()
})

dineInBtn.addEventListener("click", function(){
    DineIn()
})

AllThreeBtn.addEventListener("click", function(){
    AllThree()
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


// fastfood
// delivery
// dinein
// all

function FastFood(){
    ch9Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh9/fastFood";
        urlCall(ch9Url);
}

function Delivery(){
    ch9Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh9/delivery";
        urlCall(ch9Url);
}

function DineIn(){
    ch9Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh9/dineIn";
        urlCall(ch9Url);
}

function AllThree(){
    ch9Url = "https://jacoblv2.azurewebsites.net/AllInOne/MiniCh9/all";
        urlCall(ch9Url);
}