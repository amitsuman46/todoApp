const express = require('express');

const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();

app.use((req,res,next)=>{

    console.log('App started');
    next();
})

app.post('/addUser',(req,res,next)=>{

    const userId = '1';
    const userName = "Amit";

    const user = new User({
        userId: userId ,
        userName:userName
    })

    user.save().then(()=>{
        console.log('Added User')
        res.sendStatus(201);
    }).catch(err=>{console.log(err)});
})

mongoose.connect(`mongodb+srv://Amaan:K4jN854c2cptvp4R@cluster0.uu6zbva.mongodb.net/usersDB?retryWrites=true&w=majority`).then(()=>{
    console.log('Connected');
    app.listen(3080);
}).catch(err=>console.log(err));

