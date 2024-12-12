// Problems:
// 1) the nav bar has wonky numbers


let result = document.querySelector(".result");
let search_phrase;
let last_page;
let nr_of_pages;
let page = parseInt(localStorage.getItem('page'));

function get_title(e) {
    e.preventDefault()
    
    localStorage.setItem('page', 1);
    page = localStorage.getItem("page")
    let input = e.target.querySelector("input").value.replace(" ", "-")

    search_phrase = input;

    get_movies(search_phrase, page)
}
        
function get_movies(input, page){
    
    fetch(`https://www.omdbapi.com/?apikey=81030ec0&s=${input}&page=${page}`)
    .then(resp => resp.json())
    .then(resp => {
        
        nr_of_pages = Math.ceil(parseInt(resp.totalResults)/10)
        page = parseInt(localStorage.getItem("page"))
        
        document.querySelector(".nav").innerHTML = ""
        document.querySelector(".nav").innerHTML += `
            <button class="btn" id="minus1" onclick="minus1(${page})"> < </button>
            <button class="current btn">${page}/${nr_of_pages}</button>
            <button class="btn" id="plus1" onclick="plus1(${page})"> > </button>
            `
        
        result.innerHTML = resp.Search.map(value => `
            <div class="card" onclick="get_single_movie('${value.imdbID}')">
                <img src="${value.Poster}" alt="">
                <h3>${value.Title}</h3>
            </div>
            `).join('');
    });
}

function get_single_movie(id) {
    
    fetch(`https://www.omdbapi.com/?apikey=81030ec0&i=${id}&plot`)
    .then(resp => resp.json())
    .then(resp => {
        if (!last_page) {
            last_page = 1
        }

        result.innerHTML = `
        <div class="row">
            <div class="about d-flex">
                <h1>${resp.Title}</h1>
                <div class="d-flex type">
                    <p>${resp.Genre}</p>
                    <p>${resp.Type}</p>
                </div>
                <div class="runtime d-flex">
                    <p>${resp.Year}</p>
                    <p>${resp.Rated}</p>
                    <p>${resp.Runtime}</p>
                    <div class="ratings d-flex">${resp.imdbRating}/10</div>
                </div>
                
            </div>
            <div class="d-flex">
                <img class="sm image" src="${resp.Poster}" alt="">
                <div class="holder">
                    <h3>Summary</h3>
                    <div class="summary">${resp.Plot}</div>
                    <hr>
                    <div class="d-flex information">
                        <h4>Director</h4> 
                        <p>${resp.Director}</p>
                    </div>
                    <hr>
                    <div class="d-flex information">
                        <h4>Writers</h4> 
                        <p>${resp.Writer}</p>
                    </div>
                    <hr>
                    <div class="d-flex information">
                        <h4>Stars</h4> 
                        <p>${resp.Actors}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-secondary button" onclick="get_movies(search_phrase, last_page)">Return</button>
        `

        document.querySelector(".nav").innerHTML = ""
    });
}

function minus1 (page) {
    page = parseInt(localStorage.getItem('page'));
    --page;
    last_page = page
    if (page < 1){
        document.querySelector("#minus1").style.color = "white"
        localStorage.setItem('page', 1)
    }
    else { 
        localStorage.setItem('page', page)
            get_movies(search_phrase, page)
    }
    
}

function plus1(page) {
    page = parseInt(localStorage.getItem('page'));
    ++page;
    last_page = page
    if (page > nr_of_pages){
        document.querySelector("#plus1").style.color = "white"
        localStorage.setItem('page', nr_of_pages)
    }
    else { 
        localStorage.setItem('page', page)
        get_movies(search_phrase, page)
    }
}