function getData(){
    // fetch("https://api.adviceslip.com/advice").then(
    fetch("https://jacoblv2.azurewebsites.net/AllInOne/MiniCh1/Jacob").then(
        response => response.text()
    ).then(
        // data => injectHere.innerHTML = data.slip.advice
        data => console.log(data)
    )
}

getData();