var searchBtn = document.getElementById("searchBtn");
var userInput = document.getElementById("userInput");
var dropDown = document.getElementById("dropDown");


function getLibrary() {

var requestUrl = "https://www.loc.gov/newspapers/?fo=json";

    fetch(requestUrl).then(function(response){
        console.log( response);
        return response.json();
        
    })
    .then(function(data) {
        console.log(data);
        
var newUrl = "http://www.somewebsite.com/search?" + userInput + dropDown;
location.replace(newUrl);

        for (var i = 0; i < data.lenght; i++) {
            var createTableRow = document.createElement("div");
            // var 
        }
    })
}
// searchBtn.addEventListener("click", );