
const express = require('express')
const cors=require("cors")
const mongoose=require("mongoose")
var todosRoutes=require('./routes/todos')
var usersRoutes=require('./routes/users')
var userModel=require('./models/users')
const app = express()




mongoose.connect("mongodb://127.0.0.1:27017/itiMearn")
//middleware
app.use(express.json())
//serve static files
app.use(express.static('./static'))
//cors
app.use(cors())
app.set('view engine', 'ejs')
app.set('views','./views')
//custom middleware
// app.use((req, res, next) => {

//     console.log("request");
//     next()


// })

//routes
app.use('/todos', todosRoutes)
app.use("/users", usersRoutes)

app.get('/getUser/:id',async(req,res) => {
   
 var user=  await userModel.findById(req.params.id)
   res.render('user',{user})
})






app.listen(3333, () => {

    console.log("server started listening successfully");
})

/*
get   /todos

get  /todos/:id

post  /todos


put   /todos/:id


patch  /todos/:id



delete  /todos/:id

*/












