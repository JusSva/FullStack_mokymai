import express from 'express'

// Inicijuojame express biblioteka ir priskiriame prie kintamojo app
const app = express();

// Route'o (Kelio aprašymas)
// app.get('/', function (req, res) {
//     // console.log(req.query);
    

//     const vardai = [
//         {vardas: "Darius",
//             pavarde: "Pavardenis"
//         },
//         "Marija",
//         "Šarūnas",
//         "Paulius"
//     ];

//     // JEIGU PAMATYSITE TOKIA KLAIDA:  Cannot set headers after they are sent to the client
//     // JI REISKIA, JOG ATSAKYMA BANDOTE SIUSTI NE VIENA KARTA
    
//     res.json(users);
//     // res.json(vardai);
// });

const users = [
        {name: "Vardenis",
        last_name: "Pavardenis",
        email: "email@example.com",
        password: "P@ssW0rd"
        },
        {name: "Petras",
        last_name: "Petraitis",
        email: "Petras.Petraitis@gmail.com",
        password: "Petr1uk@s"
        }
    ];
// VARDŲ MASYVAS DEKLARUOJAMAS MODULIO APIMTYJE
// DUOMENŲ BAZĖS SIMULIACIJA
// const vardai = [
//     "Darius",
//     "Marija",
//     "Šarūnas",
//     "Paulius"
// ];

app.get('/fetch-all', function (req, res) {
    res.json(users)
})

app.get('/login', function (req, res) {
    
    let email = req.query.email
    let password = req.query.password
    if (email === "admin@vcs.lt" && password === "Github12")
            res.json("Welcome aboard, Captain")

    else if (!users.includes(email) || !users.includes(password))
        res.json("Tokio vartotojo neradome")

    res.json("Sekmingai prisijungta")
})



app.get('/fetch', function (req, res) {
    // req.query savybėje yra patalpintas objektas su visomis 
    // query parametrų reikšmėmis kurios buvo persiųstos
    
    let name = req.query.name
    let last_name = req.query.last_name
    let email = req.query.email
    let password = req.query.password

    let filteredData

    // if (name && last_name && email && password){
    filteredData = users.filter(item => 
    item.name === name || item.last_name === last_name || item.email === email || item.password === password)
    // )}
    // else if (name && last_name && email ){
    //     filteredData = users.filter(item => 
    //     item.name === name && item.last_name === last_name && item.email === email
    // )}
    // else if (name && last_name ){
    //     filteredData = users.filter(item => 
    //     item.name === name && item.last_name === last_name
    // )}
    // else if (name ){
    //     filteredData = users.filter(item => 
    //     item.name === name
    // )}
    
    
    res.json(filteredData)
    // res.json(users.filter(value => value.includes(name)))
    // if(req.query.name) {
    //     res.json(users.filter(value => value.includes(req.query.name)));
    // } else {
    //     res.json(users);
    // }
});

// POST Metodu pridedame naują reikšmę
app.post('/signup', function (req, res) {
    let name = req.query.name
    let last_name = req.query.last_name
    let email = req.query.email
    let password = req.query.password

    if (!name || !last_name || !email || !password){
        res.json("Yra neuzpildytu laukeliu. Prasome visus juos uzpildyti")
    }
    if ((name.length < 3 || name.length > 200) || (last_name.length < 3 || last_name.length > 200) ){
        res.json("Vardas ir/arba pavarde yra netinkamo ilgio. Vardo ir pavardes ilgis turi patekti i 3-200 rezius")
    }
    if (email.length < 5 || email.length > 50 || !email.includes("@")){
        res.json("el pasto adresas neatitinka ilgio formato (5-50 simboliu) arba yra netinkamo formato")
    }
    
    for (let item of users) {
        if (item.email === email){
            res.json("Toks email adresas jau yra naudojamas")
            break
        }
    }

    
    let newUser = {
        "name": name,
        "last_name": last_name,
        "email": email,
        "password": password,
    }
    users.push(newUser);


    // res.json("Sveikiname sekmingai prisiregistravus");
    // res.json(users);
});

// Aplikacijos inicijavimas ir serverio paleidimas naudojant 3000 portą
app.listen(3000);