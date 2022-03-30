import express from 'express';
import mongoose from 'mongoose';
import models  from './models/index.js';

const app = express();
const port = process.env.PORT || 3000;


const uri = "mongodb://localhost:27017/parcelkoi";
const options = {};

const dbConnect = () => {
    mongoose.connect(uri, options, (error) => {
        if(error) {
            console.error(error);
            return;
        }
        console.log("database connection established");
    })
}

dbConnect();

//middleware
app.use(express.json())

// simple post request
app.post('/', async (req, res) => {
    const user = new models.User({username: req.body.user, createdAt: new Date()})
    const savedUser = await user.save();
    res.json(savedUser)
})


app.listen(port, () => {
    console.log("App is running in", port);
});