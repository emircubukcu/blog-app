import React,{Component} from "react"
import "./Blogs.css"
import axios from "axios"

    const Blog =props=>(
        <div className="blog-container">
            <h1 className="heading">{props.blog.baslik}</h1>
            <div className="info">
                <h4>{props.blog.description}</h4>
            </div>
            <p>{props.blog.text}</p>
        </div>
    )

    export default class Blogs extends Component{
        constructor(props){
            super(props)
            this.state={blogs:[]}
        }
        componentDidMount(){
            axios.get('http://localhost:5000/create/')
            .then(response=>{
                this.setState({blogs:response.data})
            })
            .catch((error)=>{console.log(error)})
        }
        blogs(){
            return this.state.blogs.map(currentblog=>{
                return <Blog blog={currentblog} key={currentblog._id}/>
            })
        }
        render(){
            return(
                <div className="blogs-container">
                    {this.blogs()}
                </div>
            )
        }
    }   