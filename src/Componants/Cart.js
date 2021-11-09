import React, { Component } from 'react'

export default class cart extends Component {
    
    render() {
        let {title, description, imgUrl, price} = this.props;
        return (
            <div className="my-3">
                <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    <img style={{height: "200px"}} src={imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-title">{price}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-sm btn-primary">View</a>
                        <a href="/" className="btn btn-sm btn-primary mx-3">Buy</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
