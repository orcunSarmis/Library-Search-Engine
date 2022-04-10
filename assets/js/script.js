window.addEventListener("load", function() {
    fetch("https://www.loc.gov/newspapers/?fo=json").then(function(response){
        console.log("Contente-type: ", response.headers.get("Content-Type"));
        console.log("Status: ", response.status);
    })
});