import React, { Component } from 'react'

export default class ViewItems extends Component {
    render() {
        let {title,  imgUrl, price} = this.props;
        return (
            <div>
                <div className="container my-3">
                    <p style={{fontSize: "20px"}}>Product Details :</p>
                    <div className="items-img" style={{display: "flex", justifyContent: "center"}}>
                        <img src={imgUrl} style={{width: "600px", height: "600px"}} class="rounded img-fluid" alt="..."/>
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <h3>{price}</h3>
                        <div className="utilites" style={{display: 'flex', justifyContent: "space-between"}}>
                            <div className="quantity align-middle">
                                <span className="mx-2" style={{fontSize: "18px"}}>Quantity</span>
                                <i className="fas fa-lg fa-minus-square"></i>
                                <input style={{width: "40px"}} className="mx-2" type="number"/>
                                <i className="fas fa-lg fa-plus-square"></i>
                            </div>
                            <div className="cart">
                            <a href="/" style={{textDecoration: "none"}}>
                                <span className="mx-2" style={{fontSize: "18px"}}>Add To Cart</span>
                                 <i class="fas fa-2x fa-shopping-cart"></i></a>
                               
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}
