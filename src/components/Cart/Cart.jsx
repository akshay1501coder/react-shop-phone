import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {myValue => {
                        const {cart} = myValue;
                        //const cart = myValue.cart;//if we not close in curley brackets we have to access like this.
                        //console.log(cart);
                        //console.log(cart.length);
                        
                        if (cart.length > 0) {                            
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="cart"></Title>
                                    <CartColumns />
                                    <CartList value={myValue} />
                                    <CartTotals value={myValue}/>
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
