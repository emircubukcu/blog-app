import React, { Component } from "react"
import axios from "axios"

export default class Create extends Component{
    constructor(props){
        super(props)

        this.onChangebaslik=this.onChangebaslik.bind(this)
        this.onChangetext=this.onChangetext.bind(this)
        this.onChangedescription=this.onChangedescription.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            baslik:"",
            description:"",
            text:"",
        }
    }
    onChangebaslik(e){
        this.setState({
            baslik:e.target.value
        })
    }
    onChangedescription(e){
        this.setState({
            description:e.target.value
        })
    }
    
    onChangetext(e){
        this.setState({
            text:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const Blog={
            baslik:this.state.baslik,
            description:this.state.description,
            text:this.state.text
        }
        console.log(Blog)
        axios.post("http://localhost:5000/create/add",Blog)
        .then(res=>console.log(res.data))

        window.location='/'
    }
    render(){
        return(
            <div>
                <h3></h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Başlık</label>
                        <input type="text" required className="form-control" value={this.state.baslik} onChange={this.onChangebaslik}/>
                    </div>
                    <div className="form-group">
                        <label>Açıklama</label>
                        <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangedescription}/>
                    </div>
                    <div className="form-group">
                        <label>Metin</label>
                        <textarea type="text-area" required className="form-control" value={this.state.text} onChange={this.onChangetext}/> 
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Gönder" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
