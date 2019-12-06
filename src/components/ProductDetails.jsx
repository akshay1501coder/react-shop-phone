import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    //console.log(value.productdetail);
                    const { id, title, company, img, info, price, inCart } = value.productdetail
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"></img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>Rs </span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product Info:
                                    </p>
                                    <p className="lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to product
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer className="ml-2 bg-light" 
                                        disabled={inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(id)
                                            value.openModel(id);
                                        }}>
                                            {inCart ? "incart" : "Add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
