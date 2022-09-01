import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Blogs from "./components/Blogs/Blogs.js"
import Navbar from "./components/navbar/navbar"
import Create from "./components/create.component/create"

function App(){
  return(
    <Router>
      <div className='container'> 
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Blogs/>}/>
          <Route exact path="/create" element={<Create/>}></Route>
        </Routes>
        
      </div> 
    </Router>
  );
}

export default App;
