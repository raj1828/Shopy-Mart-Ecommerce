import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand mx-5" href="/">Shopy Mart</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex align-items-end flex-column" id="navbarSupportedContent">
                            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                            </ul> */}
                            <a href></a>
                            
                            <button class="btn btn-outline-success me-2 my-3" style={{right: 0}} type="button">Log In</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
