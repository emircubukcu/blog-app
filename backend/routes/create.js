const router=require('express').Router()
let Blog=require('../models/blog.model')

router.route('/').get((req,res)=>{
    Blog.find()
    .then(blog=>res.json(blog))
    .catch(err=>res.status(400).json("Error:"+err))
    console.log(Blog)
})

router.route('/add').post((req,res)=>{
    const baslik=String(req.body.baslik);
    const description=String(req.body.description)
    const text=String(req.body.text)
    
    const newBlog=new Blog({
        baslik,
        description,
        text,
    })
    newBlog.save()
    .then(()=>res.json('Blog Added'))
    .catch(err=>res.status(400).json("Error:"+err))
})
router.route('/:id').get((req,res)=>{
    Blog.findById(req.params.id)
    .then(blogs=>res.json(blogs))
    .catch(err=>res.status(400).json("Error:"+err))
})

router.route('/:id').delete((req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(()=>res.json("blog delete"))
    .catch(err=>res.status(400).json("Error:"+err))
})

module.exports=router