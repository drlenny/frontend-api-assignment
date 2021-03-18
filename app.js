const apiKey = config.apiKey;

fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(response => response.json())
    .then(data => mealList(data))
    .catch((error) => console.log("error", error));

let mealList = (data) => {
    console.log(data);

    var mealsArr = data.meals

    // let mealsArr = Object.keys(data.meals);

    console.log(mealsArr);

    for (let i = 0; i < mealsArr.length; i++){

        let mealSel = document.getElementById("mainMeal");
        let mealOpt = document.createElement("option");
        

        mealOpt.innerHTML = mealsArr[i].strCategory;
        mealOpt.value = mealsArr[i];
        mealSel.appendChild(mealOpt);
        console.log(mealsArr[i]);

    }
}

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then(response => response.json())
    .then(data => drinkList(data))
    .catch((error) => console.log("error", error));

let drinkList = (data) => {
    console.log(data);

    var drinkArr = data.drinks

    console.log(drinkArr);

    for (let i = 0; i < drinkArr.length; i++){

        let drinkSel = document.getElementById("mainDrink");
        let drinkOpt = document.createElement("option");
        

        drinkOpt.innerHTML = drinkArr[i].strCategory;
        drinkOpt.value = drinkArr[i];
        drinkSel.appendChild(drinkOpt);
        console.log(drinkArr[i]);

    }
}
