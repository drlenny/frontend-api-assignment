const apiKey = config.apiKey;

fetch("https://www.themealdb.com/api/json/v1/" + apiKey + "/search.php?s=Arrabiata")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log("error"))