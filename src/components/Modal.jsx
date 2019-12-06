import React, { Component } from 'react'
import Styled from 'styled-components'
import { ProductConsumer } from '../Context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(myValue) =>{
                    const{modalopen,closeModal} = myValue
                    const{img,title,price} = myValue.modalProduct
                    if(!modalopen){
                        return null
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 
                                    text-center text-capitalize p-5">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"></img>
                                        <h5>{title}</h5>
                                        <h5>Rs.{price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={()=>closeModal()}>
                                            Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer className="bg-light ml-2" onClick={()=>closeModal()}>
                                            Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = Styled.div`
position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
    background: var(--mainWhite);
  }
`