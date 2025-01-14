import express from 'express'
import mongoose from 'mongoose'

const app = express();

app.use(express.json());

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/pirma-duombaze')
    console.log("veikia");
    
     
} catch {
    console.log("Neveikia");   
}

const Products = mongoose.model("Products", {
        name : String,
        desciption: String,
        category: String,
        thumbnail: String,
        price: Number,
        discount_precentage: Number,
        stock: Number,
        rating: Number
     })

// Adding a new post    
app.post('/', async (req, res) => {
    await Products.create(req.body); 

    res.json('Item created successfully');
});

// Removing a post
app.delete('/delete/:id', async (req, res) => {
    await Products.findByIdAndDelete(req.params.id);

    res.json("Successfully deleted item id:" + req.params.id)
})

// updating a post 
app.put('/update/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir atnaujina jo duomenis
    await Products.findByIdAndUpdate(req.params.id, req.body); 

    res.json('The update has been successful');
});

// getting all posts
app.get('/all', async (req, res) => {
    const data = await Products.find()
    res.json(data)
})

app.listen(3000)