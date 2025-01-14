import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/youtubeDB')
    console.log("veikia");
} catch {
    console.log("neveikia");
    
}


const Videos = mongoose.model('Videos', {
    title: String,
    description: String,
    image: String,
    link: String,
    view_count: Number
})

// Visų blogo įrašų paėmimas
app.get('/api', async (req, res) => {
    try {
        // Pagal nutylejima yra siunciamas 200 statuso kodas
        res.json(await Videos.find());
    } catch {
        // Norint pakeisti atsakymo statuso koda
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

// Vieno blogo įrašo paėmimas
app.get('/api/:link', async (req, res) => {
    try {
        // Pagal nutylejima yra siunciamas 200 statuso kodas
        res.json(await Videos.findById(req.params.id));
    } catch {
        // Norint pakeisti atsakymo statuso koda
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

// Įrašo pridėjimas
app.post('/api/add/', async (req, res) => {
    try {
        await Videos.create(req.body);
        res.json('Įrašas sėkmingai sukurtas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// // Įrašo modifikavimas
// app.put('/edit/:link', async (req, res) => {
//     try {
//         await Videos.findByIdAndUpdate(req.params.id, req.body);
//         res.json('Įrašas sėkmingai atnaujintas');
//     } catch {
//         res.status(500).json('Įvyko serverio klaida');
//     }
// });

// // Įrašo ištrynimas
// app.delete('/api/:id', async (req, res) => {
//     try {
//         await Videos.findByIdAndDelete(req.params.id);
//         res.json('Įrašas sėkmingai ištrintas');
//     } catch {
//         res.status(500).json('Įvyko serverio klaida');
//     }
// });

app.listen(3000);
