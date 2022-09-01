const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
const port=5000

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/blog")
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully")
})

const createBlog=require('./routes/create')
app.use('/create',createBlog)

app.listen(port, ()=>{
    console.log(`Server port: ${port}`)
})