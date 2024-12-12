// DRY - Don't Repeat Yourself
// KISS - Keep it simple stupid

const input = document.querySelector('input');
const result = document.querySelector('.result');
let searchPhrase;

function formatIngredients(value) {
    let html = '<ul>';

    for(let i = 1; i <= 20; i++) {
        if(value['strIngredient' + i]) {
            html += `<li>
                        <a href="#" onclick="getList('i', '${value['strIngredient' + i]}')">
                            ${value['strIngredient' + i]} ${value['strMeasure' + i]}
                        </a>
                    </li>`;
        }
    }

    html += '</ul>';

    return html;
}

function setMessage() {
    result.innerHTML = `<div class="alert alert-warning">Pagal Jūsų užklausą nieko neradome :/</div>`;
}

function getMeal(e) {
    e.preventDefault();

    searchPhrase = input.value;
    
    getList('s', searchPhrase);
}


function getList(type, keyword) {
    let command = 'filter';
    
    if(type === 's') {
        command = 'search';
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/${command}.php?${type}=${keyword}`)
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.meals) 
            return setMessage();

        result.innerHTML = resp.meals.map(value => `
                <div class="col-4 pb-5">
                    <a href="#" onclick="getSingleMeal('lookup', ${value.idMeal})">
                        <img src="${value.strMealThumb}">
                        <h4 class="mt-2">${value.strMeal}</h4>
                    </a>
                </div>
            `
        ).join('');
    });
}

function getSingleMeal(type, id) {

    let link;
    if (type === "random")
        link = "https://www.themealdb.com/api/json/v1/1/random.php"
    else if (type === "lookup")
        link = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

    fetch(link)
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.meals) 
            return setMessage();

        result.innerHTML = resp.meals.map(value => `
                <div class="col-4">
                    <img src="${value.strMealThumb}">
                    <button class="btn btn-primary mt-4" onclick="getMealList()">Atgal į sąrašą (Doesn't really work)</button>
                </div>
                <div class="col-8">
                    <h3>${value.strMeal}</h3>
                    <p>${value.strInstructions}</p>
                    <div>
                        <strong>Kategorija:</strong>
                        <a href="#" onclick="getList('c', '${value.strCategory}')">${value.strCategory}</a>
                    </div>
                    <div>
                        <strong>Šalis:</strong>
                        <a href="#" onclick="getList('a', '${value.strArea}')">${value.strArea}</a>
                    </div>
                    <div>
                        <h4>Ingridientai</h4>
                        ${formatIngredients(value)}
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${value.strYoutube.split('?v=')[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            `
        ).join('');
    });
}