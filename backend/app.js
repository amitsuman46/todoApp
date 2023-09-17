const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/User')
const app = express();
const bodyParser = require('body-parser');
const { isAuth } = require('./middleware/isAuth');

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT');
    res.setHeader('Access-Control-Allow-Header','Content-Type,Authorization');
    next();
})

app.use(userRoute);


app.use('/testing',isAuth,(req,res,next)=>{
    res.status(200).json({message:"token validated"});
})

mongoose.connect(`mongodb+srv://Amaan:K4jN854c2cptvp4R@cluster0.uu6zbva.mongodb.net/usersDB?retryWrites=true&w=majority`).then(()=>{
    console.log('Connected');
    app.listen(3080);
}).catch(err=>console.log(err));