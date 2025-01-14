import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

await mongoose.connect('mongodb://127.0.0.1:27017/Prekiu-krepselis')

const Items = mongoose.model('Items', {
    name: String,
    photo: String,
    description: String,
    price: Number,
    discount: Number,
    rating: Number
})

// Get all of the items
app.get('/api', async (req ,res) => {
    try {
        res.json(await Items.find())
    } catch {
        res.status(500).json("We have a problem, chief")
    }
})

// Vieno blogo įrašo paėmimas
app.get('/api/:id', async (req, res) => {
    try {
        // Pagal nutylejima yra siunciamas 200 statuso kodas
        res.json(await Items.findById(req.params.id));
    } catch {
        // Norint pakeisti atsakymo statuso koda
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

// Įrašo pridėjimas
app.post('/api', async (req, res) => {
    try {
        await Items.create(req.body);
        res.json('Įrašas sėkmingai sukurtas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Įrašo modifikavimas
app.put('/api/:id', async (req, res) => {
    try {
        await Items.findByIdAndUpdate(req.params.id, req.body);
        res.json('Įrašas sėkmingai atnaujintas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Įrašo ištrynimas
app.delete('/api/:id', async (req, res) => {
    try {
        await Items.findByIdAndDelete(req.params.id);
        res.json('Įrašas sėkmingai ištrintas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

app.listen(3000)