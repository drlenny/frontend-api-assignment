const apiKey = config.apiKey;

const drinkImage = document.getElementById("drinkImage");

const mealImage = document.getElementById("mealImage");

// making dropdown menu for the meal options 

fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(response => response.json())
    .then(data => mealList(data))
    .catch((error) => console.log("error", error));

let mealList = (data) => {
    // console.log(data);

    let mealsArr = data.meals;
    // console.log(mealsArr);

    for (let i = 0; i < mealsArr.length; i++) {

        let mealSel = document.getElementById("selectMeal");
        let mealOpt = document.createElement("option");

        // console.log(mealsArr[i]);

        mealOpt.innerHTML = mealsArr[i].strCategory;
        mealOpt.value = mealsArr[i].strCategory;
        mealSel.appendChild(mealOpt);
    }
}
// Making drop down for drinks -----------------------
fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then(response => response.json())
    .then(data => drinkList(data))
    .catch((error) => console.log("error", error));

var drinkList = (data) => {
    // console.log(data);

    var drinkArr = data.drinks

    // console.log(drinkArr);

    for (let i = 0; i < drinkArr.length; i++) {

        var drinkSel = document.getElementById("selectDrink");
        var drinkOpt = document.createElement("option");


        drinkOpt.innerHTML = drinkArr[i].strCategory;
        drinkOpt.value = drinkArr[i].strCategory;
        drinkSel.appendChild(drinkOpt);
        // console.log(drinkArr[i]);

    }
}

//---------------------------------------//

// getting a random meal from selected category and displaying it

const selectMeal = document.getElementById("selectMeal")

const mealButton = document.getElementById("mealButton")


let getMealImage = (data) => {
    // console.log(data);
    // console.log(data.meals);

    let categoryArr = data.meals

    let randomMeal = categoryArr[Math.floor(Math.random() * categoryArr.length)];


    // console.log(randomMeal);



    mealImage.src = randomMeal.strMealThumb
}

mealButton.addEventListener("click", function () {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectMeal.value)
        .then(response => response.json())
        .then(data => getMealImage(data))
        .catch((error) => console.log("error", error));

})

// ------- Get random drink ----------

const selectDrink = document.getElementById("selectDrink")

const drinkButton = document.getElementById("drinkButton")


var getDrinkImage = (data) => {
    console.log(data);
    console.log(data.drinks);

    var categoryArr = data.drinks

    var randomDrink = categoryArr[Math.floor(Math.random() * categoryArr.length)];

    // console.log(randomDrink);


    drinkImage.src = randomDrink.strDrinkThumb
}

drinkButton.addEventListener("click", function () {
    // var drinkInput = selectDrink.value;
    // var replaced = drinkInput.split(' ').join
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + selectDrink.value)
        .then(response => response.json())
        .then(data => getDrinkImage(data))
        .catch((error) => console.log("error", error));

})


// randomize meal and drink button -------------

const randomButton = document.getElementById("randomButton")


var getRandomImages = (data) => {
    // console.log(data);
    // console.log(data[0].meals[0].strMeal);
    // console.log(data[0].meals[0].strMealThumb);

    mealImage.src = data[0].meals[0].strMealThumb

    drinkImage.src = data[1].drinks[0].strDrinkThumb

}

randomButton.addEventListener("click", function () {
    let randomMealApi = fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response => response.json())
    let randomDrinkApi = fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(response => response.json())

    Promise.all([randomMealApi, randomDrinkApi])
        .then(data => getRandomImages(data))
        .catch((error) => console.log("error", error))
})


