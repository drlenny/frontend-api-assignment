const apiKey = config.apiKey;

fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(response => response.json())
    .then(data => mealList(data))
    .catch((error) => console.log("error", error));

let mealList = (data) => {
    console.log(data);


    let mealsArr = Object.keys(data.meals);

    console.log(mealsArr);

    for (let i = 0; i < mealsArr.length; i++){

        let mealSel = document.getElementById("mainMeal");
        let mealOpt = document.createElement("option");
        

        mealOpt.innerHTML = mealsArr[i];
        mealOpt.value = mealsArr[i];
        mealSel.appendChild(mealOpt);
        console.log(mealsArr[i]);

    }
}