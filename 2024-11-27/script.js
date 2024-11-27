function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

for (let i =0; i<9; i++){
    document.querySelector(`.game`).innerHTML += `<div class="symbol number${i}"></div>`
}
let positions = [0,1,2,3,4,5,6,7,8];

let gridas = [];

for (let i=0; i < 9; i++){
    let position = positions[random(0, positions.length-1)]
    positions.splice(positions.indexOf(position), 1)
    if (i % 2 === 0){
        document.querySelector(`.game .number${position}`).innerHTML += `<i class="bi bi-circle"></i>`
        gridas[position] = 0
    }
    else {
        document.querySelector(`.game .number${position}`).innerHTML += `<i class="bi bi-x"></i>`
        gridas[position]= 1
    }
}
 let nuliukai = false;
 let kryziukai = false;

//  Checking rows
for (let i = 0; i< 3; i++){
    let rezultatas = gridas[i*3+0] + gridas[i*3+1] + gridas[i*3+2]
    if (rezultatas === 0)
        nuliukai = true;
    if (rezultatas === 3)
        kryziukai = true
}

// checking collumns
for (let i =0; i< 3; i++){
    let rezultatas = gridas[i] + gridas[i+3] + gridas[i+6];
    if (rezultatas === 0)
        nuliukai = true;
    if (rezultatas === 3)
        kryziukai = true
}

// checking diagonals
let diagonal1 = gridas[0] + gridas[4] + gridas[8];
let diagonal2 = gridas[2] + gridas[4] + gridas[6];

if (diagonal1 === 0 || diagonal2 ===0) {
    nuliukai = true
}
else if (diagonal1 === 3 || diagonal2 ===3) {
    kryziukai = true
}

if (nuliukai ===false && kryziukai === false)
    document.querySelector(`.result`).innerHTML += `<h5>Lygiosios!</h5>`
else if (nuliukai===true && kryziukai ===false) {
    document.querySelector(`.result`).innerHTML += `<h5>Laimėjo nuliukai!</h5>`
}
else if (nuliukai===false && kryziukai===true) {
    document.querySelector(`.result`).innerHTML += `<h5>Laimėjo kryžiukai!</h5>`
}
else if (nuliukai===true && kryziukai===true) {
    document.querySelector(`.result`).innerHTML += `<h5>Lygiosios!</h5>`
}