function search(e) {
    let search_content = document.querySelector("input").value.toLowerCase()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_content}`)
    .then(resp => resp.json())
    .then(resp => {
        let meals = resp.meals;
        // console.log(meals);
        
        let card = []
        for (item of meals) {
            let name = item.strMeal
            let photo = item.strMealThumb;
            let instructions = item.strInstructions;
            
            let ingredients = []
            for (let i=1; i<21; i++) {
                let ingredient = item[`strIngredient${i}`];
                let measurement= item[`strMeasure${i}`]
                if (ingredient !== null && measurement !== null && ingredient !== "" && measurement !== "") {
                    ingredients.push({ingredient, measurement})
                }
            }
            card.push({name, photo, instructions, ingredients})
            // card = {[name, phote, instructions, [ingredients, measurements]]}
        }


        let content = card.map((card) => 
            `
            <div class="card">
                <h3 class="title">${card.name}</h3>
                <img src="${card.photo}" alt="" class="photo">
                <div class="container">
                    <ul id="ingredients">
                        ${card.ingredients.map(({ ingredient, measurement }) => `<li>${ingredient} ${measurement}</li>`).join('')}
                    </ul>
                </div>
                <div class="instructions">
                    <h5>Instructions</h5>
                    <p>${card.instructions}</p>
                </div>
            </div>
            `
        ).join(''); // Combine all cards into a single string
        
        document.querySelector(".output").innerHTML = content;        
    });              
}








































// const data = [
//     "Delicious Dish",
//     "https://via.placeholder.com/150",
//     ["ingredient1", "ingredient2", "ingredient3"]
// ];

// const container = document.getElementById("output");

// const htmlContent = data.map(item => {
//     if (Array.isArray(item)) {
//         // For the array of ingredients, create a list
//         return `<ul>${item.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>`;
//     } else if (typeof item === "string" && item.startsWith("http")) {
//         // For a photo URL, create an image element
//         return `<img src="${item}" alt="Dish photo" />`;
//     } else {
//         // For other strings, treat them as titles or descriptions
//         return `<h2>${item}</h2>`;
//     }
// }).join(''); // Join the array to create a single HTML string

// // Insert the HTML into the container
// container.innerHTML = htmlContent;



