const mongoose = require("mongoose")
const { string, boolean } = require("zod")

const schema = mongoose.schema
mongoose.connect(proccess.env)

const todoSchema = schema({
   title:{
    type : string,
    require: true
   },

   description:{
    type: string,
   },

   completed:{
     type: boolean,
     default: false
   }



})

const todo = mongoose.model("todo",todoSchema)

module.exports={
    todo
}