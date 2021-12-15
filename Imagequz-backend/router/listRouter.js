const listRouter = require('express').Router();
const {flowers} = require('../filter/flowers');
const {quizzes} = require('../filter/data');
const {scores} = require('../filter/scores');

listRouter.get('/FLOWS', (req, res)=>{
    res.send({
        code: 200,
        list:flowers
    });
});

listRouter.get('/Test', (req, res)=>{
    res.send({
        code: 200,
        list:quizzes
    });
});

listRouter.get('/Quz', (req, res)=>{
    let getList = quizzes.find(v=>{
        return v.id = req.query.id
    })
    res.send({
        code: 200,
        list:getList
    });
});

listRouter.post('/Score', (req, res)=>{
    console.log(req.body)
    res.send({
        code: 200
    });
});

module.exports = listRouter;
