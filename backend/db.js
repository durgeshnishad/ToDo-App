const mongoose= require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0.nmakuif.mongodb.net/todo") // not the best way to post into production
const todoSchema= mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo= mongoose.model('todos', todoSchema)

module.exports={
    todo: todo
}