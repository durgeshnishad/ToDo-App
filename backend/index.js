const express= require('express')
const {createTodo}= require('./types.js')
const { todo } = require('./db.js')
const app= express()
const port=3000



app.use(express.json())

app.get('/todos',async function(req, res){
    const todos= await todo.find({})

    res.json({
        todos
    })
})

app.post('/todo', async function(req, res){
    const createPayload= req.body
    const parsePayload= createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'wrong input'
        })
        return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })
    res.json({
        msg: 'Todo added'
    })
})

app.put('/completed',async function(req, res){
    let updatePayload= req.body
    const parsePayload= updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'wrong input'
        })
        return
    }
    await todo.update({
        id: req.body.id
    }),{
        completed: false
    }
    res.json({
        msg: 'mark as completed'
    })
})


app.listen(port, ()=>{
    console.log(`ToDo app listening on port ${port}`)
})