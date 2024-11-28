function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

document.querySelector(`button`).innerHTML += `green`;

function get_color () {
    let color = document.querySelector('.pirma').textContent
    document.querySelector(`body`).style.backgroundColor = color;

}

function increase_number() {
    let current_number = parseInt(document.querySelector('.antra').textContent);
    document.querySelector(`.antra`).innerHTML = `${current_number + 1}`;
}

function change_position () {
    document.querySelector(`.moving`).style.top = `${random(0, 450)}px`
    document.querySelector(`.moving`).style.left = `${random(0, 450)}px`
}

let count = 0;
let laimingas = random(0,100)
function isridenti () {
    count++
    let skaicius =random(0, 100)
    let style;
    let color = "black"

    if (skaicius < 20) {
        style = "background-color: black" 
        color = "white"
    }
    else if (skaicius >19 && skaicius < 40)
        style = "background-color: yellow"
    else if (skaicius >39 && skaicius < 60) {
        style = "background-color: red"
        color = "white"
    }
    else if (skaicius >59 && skaicius < 80) {
        style = "background-color: blue"
        color = "white"
    }
    else if (skaicius >79) {
        style = "background-color: green"
        color = "white"
    }

    if (skaicius === laimingas) {
        document.querySelector(`.laimingas`).innerHTML += `<h1>Jūs laimėjote SKAMBUTĮ (iš kalėjimo)</h1>`
    }
    console.log(count);

    if (count < 6 || skaicius !== laimingas){
        document.querySelector(`.kamuoliuku_holder`).innerHTML += `<div class="kamuoliukas" style = "${style}; color: ${color}"><div class="skaicius">${skaicius}</div></div>`
    }
    else {
        document.querySelector(`.ridenti`).disabled=true
    }
}