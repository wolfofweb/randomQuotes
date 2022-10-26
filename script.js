// function for getting new random quotes
function getQuote() {
    // fetching quotable URL and gathering data from the JSON file
    fetch("https://quotable.io/random?maxLength=100").then(function (response) {
        return response.json()
    }).then(function (data) {
        //Extracting quote and author name from JSON object
        document.querySelector(".quoteText").innerText = data.content + "\n" + "-- " + data.author + "\n\n"
    })
}