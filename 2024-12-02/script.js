let most_searched = ["What to watch", 
    "What is my IP", 
    "When is Mother's Day 2024", 
    "How many weeks in a year", 
    "How many days until Christmas", 
    "How to screenshot on Mac", 
    "What time is it", 
    "How many ounces in a gallon", 
    "When is Easter 2024", 
    "How many ounces in a cup"];

let check = []
    for (item of most_searched){
        check.push(item.toLowerCase())
    }

function filter(e) {
    let search = e.target.value.toLowerCase();
    let autocomplete = [];
    for (item of check){
        if (item.includes(search)) {
            autocomplete.push(most_searched[check.indexOf(item)])
        }
    }

    document.querySelector('.search').innerHTML = ``
    for (item of autocomplete) {
        document.querySelector('.search').innerHTML += `<a href="" class="suggestion">${item}</a>`
    }
}

function un_Focus(e) {
    document.querySelector('.search').innerHTML = ``
}