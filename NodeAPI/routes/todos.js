const express = require('express');
const fs = require('fs');
var { saveTodo, getTodoById, EditTodoById, getTodos } = require('../controllers/todos')
var {auth}=require('../middlewares/auth')
var router = express.Router()


router.use(auth)

router.get("/", async (req, res) => {
    try {
        var todos = await getTodos()

        res.status(200).json(todos)
    } catch (e) {
        res.status(404).json(e)
    }


})


router.post("/", async (req, res) => {
    console.log(req.user.userId);
    var {title} = req.body
    try {
        var newTodo = await saveTodo({title:title, userId:req.user.userId})
        res.status(201).json(newTodo)
    } catch (e) {
        res.status(422).json(e)
    }


})

router.get("/:id",async (req, res) => {
    var id = req.params.id
    try{
        var foundedTodo = await getTodoById(id)
        res.json(foundedTodo)
    }catch(e){
     res.status(404).json(e.message)

    }
   

})

router.patch("/:id",async (req, res) => {
    var { title } = req.body
    var { id } = req.params
    
    var UpdatedTodo =await EditTodoById(id, title)
    res.json(UpdatedTodo)
})

module.exports = router