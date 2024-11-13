console.log("---Pirma uzduotis---")
console.log(`${8*4+2}`)
console.log(`${8*(4+2)}`)
console.log(`${48/4}`)
console.log(`${3+6*2}`)

console.log("---Antra Uzduotis---");
var a = 10;
var b = 50;
var c = a + b
console.log(a, b, c);

console.log("---Trecia uzduotis---");
var a = 10;
var b = 60;
var c = 45;
console.log(`a: ${a}; b: ${b}; c: ${c}`);
console.log(`a+b+c = ${a+b+c}`);
console.log(`a-b-c = ${a-b-c}`);
console.log(`a*b*c = ${a*b*c}`);
console.log(`a/b/c = ${a/b/c}`);

console.log("---Ketvirta uzduotis---")
var a = 10;
var b = 50;
console.log(`Pirmas skaicius- ${a} pakletas 5 laipsniu: ${a**5}`)
console.log(`Antras skaicius- ${b} padidintas 2 kartus: ${b*2}`)

console.log("---Penkta uzduotis---");
let first_name = "Justas";
let last_name = "Svagzdys";
let birth_year = 2001;
let current_year = 2024;
console.log(`As esu ${first_name} ${last_name} ir man yra ${current_year-birth_year} metai`);

console.log("---Sesta uzduotis---");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

var a = random(0, 4);
var b = random(0, 4);
if (b>a) {
    if (a !== 0) {
    console.log(`a = ${a}, b = ${b}; ${b/a}`)
    }
    else {
        console.log("The lower number is a zero");
    }
}
else {
    if (b !== 0) {
        console.log(`a = ${a}, b = ${b}; ${a/b}`)
        }
    else {
        console.log("The lower number is a zero");
    }
}

console.log("---Septinta uzduotis---");

var a = random(0, 25);
var b = random(0, 25);
var c = random(0, 25);
var answer = "nera";

if (a>b && a<c) {
    answer = a;
}
if (a<b && a>c) {
    answer = a;
}
if (b<a && b>c) {
    answer = b;
}
if (b<c && b>a) {
    answer = b;
}
if (c<b && c>a) {
    answer = c;
}
if (c<a && c>b) {
    answer = c;
}
console.log(`a: ${a}; b: ${b}; c: ${c}; atsakymas: ${answer}`);

console.log("---Astunta uzduotis---");
var a = random(0,2);
var b = random(0,2);
var c = random(0,2);
var count_0 = 0;
var count_1 = 0;
var count_2 = 0;

if (a === 0) {
    count_0 += 1
}
if (b === 0) {
    count_0 += 1
}
if (c === 0) {
    count_0 += 1
}
if (a === 1) {
    count_1 += 1
}
if (b === 1) {
    count_1 += 1
}
if (c === 1) {
    count_1 += 1
}
if (a === 2) {
    count_2 += 1
}
if (b === 2) {
    count_2 += 1
}
if (c === 2) {
    count_2 += 1
}
console.log(`0 kiekis: ${count_0}, 1 kiekis: ${count_1}, 2 kiekis: ${count_2}`)

console.log("---Devinta uzduotis---");
var a = random(-10,10);
var b = random(-10,10);
var c = random(-10,10);
var neigiami = '';
var nulis = '';
var teigiami = '';

if (a<0) {
    neigiami +='[' + a + ']';
}
if (a==0) {
    nulis += '('+a + ")";
}
if (a>0) {
    teigiami += '{' + a + "}";
}
if (b<0) {
    neigiami +='[' + b + ']';
}
if (b==0) {
    nulis += '('+ b + ")";
}
if (b>0) {
    teigiami += '{' + b + "}";
}
if (c<0) {
    neigiami +='[' + c + ']';
}
if (c==0) {
    nulis += '('+ c + ")";
}
if (c>0) {
    teigiami += '{' + c + "}";
}


console.log(`Neigiami skaiciai: ${neigiami}; nuliai: ${nulis}; Teigiami skaiciai: ${teigiami}`);

console.log("---Desimta uzduotis---");
var kaina = 1;
var kiekis = random(5, 3000);

if (kiekis>1000) {
    console.log(`Perkama ${kiekis} zvakiu ir ju visu kaina yra: ${kiekis * 0.97} EUR`)
}
else if (kiekis > 2000) {
    console.log(`Perkama ${kiekis} zvakiu ir ju visu kaina yra: ${kiekis * 0.96} EUR`)
}
else if (kiekis <= 1000) {
    console.log(`Perkama ${kiekis} zvakiu ir ju visu kaina yra: ${kiekis * 1} EUR`)
}

console.log("11 uzduotis");
var a = random(0,100);
var b = random(0,100);
var c = random(0,100);
var suma = 0;
var daliklis = 0

console.log(`Pirmas vidurkis: ${Math.round((a+b+c)/3)}`);

if (a>=10 && a<= 90) {
    suma+=a
    daliklis += 1
}
if (b>=10 && b<= 90) {
    suma+=b
    daliklis +=1
}
if (c>=10 && c<= 90) {
    suma+=c
    daliklis +=1
}

console.log(`a: ${a}; b: ${b}; c: ${c}; Daliklis: ${daliklis}; suma: ${suma}; antras vidurkis: ${Math.round(suma/daliklis)}`);
