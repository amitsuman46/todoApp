const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.signUp = (req,res,next)=>{

    const userId = req.body.userId;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password,12).then(
        (hashPassword)=>{
            const user = new User({
                userId: userId ,
                userName:userName,
                email,
                password: hashPassword
            })
        
            user.save().then(()=>{
                console.log('Added User')
                res.sendStatus(201);
            }).catch(err=>{console.log(err)});
        }
    ).catch(
        ()=>{
            res.status(500).json({errorMessage:"Internal Server Error"});
        }
    )
}

exports.login = (req,res,next) => {
    const email = req.body.email;
    User.findOne({email: email}).then(
        (user)=>{
            if(!user){
                return  res.status(401).json({errorMessgae:"Email not found"});
            }
            const password = req.body.password;
            bcrypt.compare(password,user.password).then(
                (flag)=>{
                    if(flag){
                        const token = jwt.sign({email:email,userName:user.userName},"pkmkb",{expiresIn:"1h"});

                        return  res.status(202).json({message:"User LoggedIn Successfully",token:token});
                    }
                    return  res.status(401).json({errorMessage:"Invalid Password"});
                }
            )
        }
    )
}

