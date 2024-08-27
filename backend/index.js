const express = require ("express")
const {createTodo , updateTodo} = require("./types")
const {todo} = require ("./db")
const cors = require("cors")




const app = express()
app.use(express.json())
app.use(cors())

const port = 3000

 app.post("/todo",async (req ,res)=>{
    const createPayload = req.body
    const parsePlayload = createTodo.safeParse(createPayload)


    if(!parsePlayload){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })

        return
    }

   await todo.create({
        title: payload.title,
        description: payload.description
    })

    res.json({
        msg : "Todo created"
    })

 })

 app.get ("/todos",async (req,res)=>{
       const todos=  await todo.find({})
            res.json({
                todos
            })
 })

 app.put("/completed",async (req,res)=>{
    const updatePlayload = req.body
    const parsePlayload  = updateTodo.safeParse(updatePlayload)

    if(!parsePlayload){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })

        return
    }
 
    await todo.update({
        _id: updatePlayload.id 
     },{
        completed:true
     })

     res.json({
        msg:"Todo marked as completed"
     })

 })



app.listen(port ,()=>{
    console.log("express is lesten on 3000")
})