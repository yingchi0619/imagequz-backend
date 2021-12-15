const userRouter = require('express').Router();
const {customers} = require('../filter/customers');
const fs = require('fs');
userRouter
    .post('/login', (req, res)=>{
        let getInfo =  req.body;
        let j = {
            code: 403,
            msg: 'user or password error'
        }

        if(customers.length){
            let success = customers.find(v=>{
                return v.userName === getInfo.userName && v.password === getInfo.password;
            });
            if(success){
                j.code = 200;
                j.msg = 'login success';
                j.userInfo = success;
            }
        }
        res.send(j);
    })
    .post('/signup', (req, res)=>{
        let getInfo =  req.body;
        let j = {};
        if(customers.length){
            let getHaveUse = customers.find(v=>{
                let mark = false;
                if(v.email === getInfo.email){
                    j.errorType = 'email';
                    mark = true;
                }
                if(v.userName === getInfo.userName){
                    j.errorType = 'userName';
                    mark = true;
                }
                return mark;
            });
            if(getHaveUse){
                j.code = 403;
                j.msg = 'User already exists';
            }
        }
        if(j.code !== 403){
            getInfo.id = customers.length+1;
            customers.push(getInfo);
            j.code = 200;
            j.msg = 'Sign in success!';
        }
        res.send(j);
    })

module.exports = userRouter
