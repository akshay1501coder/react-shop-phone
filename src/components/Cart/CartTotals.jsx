import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({ value }) {
    const { CartSubTotal, CartTax, CartTotal, ClearCart } = value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button" onClick={() => ClearCart()}>
                                Clear Cart
                        </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal: </span>
                            <strong>Rs.{CartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">carttax: </span>
                            <strong>Rs.{CartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">carttotal: </span>
                            <strong>Rs.{CartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
