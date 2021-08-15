import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import cards from "./dbCards.js";


//App config
const app = express();
const port = process.env.PORT || 8001;
const conncetion_url = 'mongodb+srv://admin:bjNZ1HgsFi7Xadml@cluster0.hbukp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


// midle wares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(conncetion_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})
//Api endpoints
app.get("/", (req, res) => res.status(200).send("Back end part nothing to look here its hosted on heroku"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });

});

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
})

//Listener

app.listen(port, () => console.log(`listing on localhost: ${port}`));