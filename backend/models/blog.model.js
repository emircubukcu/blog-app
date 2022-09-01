const mongoose=require('mongoose')
const Schema=mongoose.Schema

const blogSchema=new Schema({
    baslik:{type:String,required:true},
    description:{type:String,required:true},
    text:{type:String,required:true}
},{
    timestamps:true,
})

const Blog=mongoose.model('Blog',blogSchema)

module.exports=Blog