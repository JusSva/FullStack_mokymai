function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let current_number = parseInt(document.querySelector('.round').textContent);
document.querySelector(`.round`).innerHTML = `Round ${current_number + 1}`;
let player_score = 0;
let clicked = false;

function increase_score(event) {
    if (!clicked) { 
        let score = document.querySelector(`.player .score`);
        player_score++;
        score.innerHTML = player_score;
        clicked = true; 
    }
}

// The game itself
let count = 0;
let single_point = setInterval(() => {
    let kvadratas = document.querySelector(`.kvadratas`);
    document.querySelector(`.round_timer`).innerHTML = `${30-count} sec`
    let color = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
    kvadratas.style.backgroundColor = `${color}`;
    kvadratas.style.top = `${random(0,650)}px`;
    kvadratas.style.left = `${random(0,650)}px`;

    if (!clicked) { 
        let computer_score = parseInt(document.querySelector(`.computer .score`).textContent);
        document.querySelector(`.computer .score`).innerHTML = computer_score + 1;
    }

    // Reset the clicked flag after moving the square
    clicked = false;
    count++;

    if (count > 30) {
        clearInterval(single_point);
        count = 0;
    }
}, 1000);
