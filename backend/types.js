const zod = require("zod")

const createtodo = zod.object({
    title: zod.string(),
    descritpion: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports={
    createTodo: createtodo,
    updateTodo: updateTodo
}