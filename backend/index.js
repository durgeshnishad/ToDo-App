const express= require('express')
const {createTodo}= require('./types.js')
const app= express()
const port=3000



app.use(express.json())

app.get('/todos',(req, res)=>{

})

app.post('/todo',(req, res)=>{
    const createPayload= req.body
    const parsePayload= createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(41).json({
            msg: 'wrong input'
        })
        return
    }else{

    }
})

app.put('/completed',(req, res)=>{
    let updatePayload= req.body
    const parsePayload= updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'wrong input'
        })
        return
    }else[

    ]
})


app.listen(port, ()=>{
    console.log(`ToDo app listening on port ${port}`)
})