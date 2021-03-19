const apiKey = config.apiKey;


// making dropdown menu for the meal options 

fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(response => response.json())
    .then(data => mealList(data))
    .catch((error) => console.log("error", error));

let mealList = (data) => {
    // console.log(data);

    let mealsArr = data.meals;
    // console.log(mealsArr);

    for (let i = 0; i < mealsArr.length; i++){

        let mealSel = document.getElementById("selectMeal");
        let mealOpt = document.createElement("option");

        // console.log(mealsArr[i]);

        mealOpt.innerHTML = mealsArr[i].strCategory;
        mealOpt.value = mealsArr[i].strCategory;
        mealSel.appendChild(mealOpt);
    }
}


////////////////


// getting a random meal from selected category and displaying it

const selectMeal = document.getElementById("selectMeal")

const mealButton = document.getElementById("mealButton")


let getMealImage = (data) => {
    // console.log(data);
    // console.log(data.meals);
    
    let categoryArr = data.meals

    let randomMeal = categoryArr[Math.floor(Math.random() * categoryArr.length)];

    // console.log(randomMeal);

    let mealImage = document.getElementById("mealImage");

    mealImage.src = randomMeal.strMealThumb
}

mealButton.addEventListener("click", function(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectMeal.value)
    .then(response => response.json())
    .then(data => getMealImage(data))
    .catch((error) => console.log("error", error));
})

