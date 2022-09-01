import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">BlogApp</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link to="/" className="nav-link">Anasayfa</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/create" className="nav-link">Blog Oluştur</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}