var todosModel=require("../models/todos")



function saveTodo(todo) {
  return  todosModel.create(todo)

}

function getTodoById(id) {

    //    todosModel.findOne({_id:id})

      return todosModel.findById(id)
}
function EditTodoById(id,title){
    
   return todosModel.findByIdAndUpdate(id,{title:title},{new:true})
}


function getTodos(){
   return todosModel.find().populate('userId')
}

module.exports={saveTodo,getTodoById,EditTodoById,getTodos}



// module.exports={

//  saveTodo(todo) {
//     var todos = JSON.parse(fs.readFileSync("./data.json", { encoding: "utf8" }))
//     todos.push(todo);
//     fs.writeFileSync("./data.json", JSON.stringify(todos), { encoding: "utf-8" })

// },

//  getTodoById(id) {

//     var todos = JSON.parse(fs.readFileSync("./data.json", { encoding: "utf8" }))
//     var foundTodo = todos.find((todo) => {
//         return todo.id == id
//     })

//     return foundTodo
// },
//  EditTodoById(id,title){

//     var todos = JSON.parse(fs.readFileSync("./data.json", { encoding: "utf8" }))
//     var foundTodo = todos.find((todo) => {
//         return todo.id == id
//     })

//     foundTodo.title = title
//     fs.writeFileSync("./data.json", JSON.stringify(todos), { encoding: "utf8" })

//     return foundTodo

// }


// }