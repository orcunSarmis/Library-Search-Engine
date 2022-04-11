var searchBtn = document.getElementById("searchBtn");

function getLibrary() {

var requestUrl = "https://www.loc.gov/newspapers/?fo=json";

    fetch(requestUrl).then(function(response){
        console.log( response);
        return response.json();
        
    })
    .then(function(data) {
        console.log(data);

        for (var i = 0; i < data.lenght; i++) {
            var createTableRow = document.createElement("div");
            // var 
        }
    })
}
// searchBtn.addEventListener("click", );