function formatIngredients(value) {
    let html = '<ul>';

    for(let i = 1; i <= 20; i++) {
        if(value['strIngredient' + i]) {
            html += `<li>${value['strIngredient' + i]} ${value['strMeasure' + i]}</li>`;
        }
    }

    html += '</ul>';

    return html;
}

function getMeal(e) {
    e.preventDefault();

    const input = e.target.querySelector('input');
    const result = document.querySelector('.result');
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.meals) 
            return;

        result.innerHTML = resp.meals.map(value => `
                <div class="row py-3">
                    <div class="col-4" >
                        <h3>${value.strMeal}</h3>
                        <img src="${value.strMealThumb}" onclick="show(event)">
                    </div>
                    <div class="col-8 extra_info">
                        <p>${value.strInstructions}</p>
                        <div>
                            <strong>Kategorija:</strong>
                            <span>${value.strCategory}</span>
                        </div>
                        <div>
                            <strong>Šalis:</strong>
                            <span>${value.strArea}</span>
                        </div>
                        <div>
                            <h4>Ingridientai</h4>
                            ${formatIngredients(value)}
                        </div>
                   </div>
                </div>
            `
        ).join('');
    });
}

function show(e) {
    let card = e.target.parentElement.parentElement    
    let result = document.querySelector(".in_focus")
    let name = card.children[0].children[0].textContent
    let photo = e.target.getAttribute("src")

    let ingredientsList = card.querySelector('ul'); // Locate the <ul> directly
    let ingredients = Array.from(ingredientsList.children).map(element => element.textContent);
    let country = card.children[1].children[2].children[1].textContent
    let instructions=card.children[1].children[0].textContent
    let category =card.children[1].children[1].children[1].textContent
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => resp.json())
    .then(resp =>{
        youtube = resp.meals[0].strYoutube
        







    });
}