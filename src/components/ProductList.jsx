import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../Context'

export default class ProductList extends Component {

    // state = {
    //     Products: storeProducts
    // }

    render() {
        //console.log(this.state.Products);

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    //console.log(value);
                                    return value.products.map(product => {
                                    return <Product key={product.id} products={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}