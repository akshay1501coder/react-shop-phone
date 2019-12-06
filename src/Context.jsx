import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {

    state = {
        //products:storeProducts,//with this if we change val in state it will change actual val also as it
        // is setting the reference of original data. so to get rid of it we are writing Setproducts()
        products: [],
        productdetail: detailProduct,
        cart: [],
        modalopen: false,
        modalProduct: detailProduct,
        CartSubTotal: 0,
        CartTax: 0,
        CartTotal: 0
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })

        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItemById = (id) => {
        const ProddetailsById = this.state.products.find(m => m.id === id)
        return ProddetailsById
    }

    handleDetail = (id) => {
        const prod = this.getItemById(id)
        this.setState(() => {
            return { productdetail: prod }
        })
    }
    addToCart = (id) => {
        //console.log(`added to cart with id ${id}`)
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItemById(id))
        const myproduct = tempProducts[index]
        myproduct.inCart = true
        myproduct.Count = 1
        const price = myproduct.price
        myproduct.total = price
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, myproduct] }
        },
            () => { //its a callback function
                this.addTotals()
                //console.log(this.state)
            }
        )
    }

    /* {...this.props} spreads out the "own" enumerable properties in props as discrete properties 
    on the Modal element you're creating. For instance, if this.props contained a: 1 and b: 2, then 
    <Modal {...this.props} title='Modal heading' animation={false}>
    would be the same as
    <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>
    */

    openModal = id => {
        const myprod = this.getItemById(id);
        this.setState(() => {
            return { modalProduct: myprod, modalopen: true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalopen: false }
        })
    }

    increment = id => {

        let tempCart = [...this.state.cart]
        const SelectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(SelectedProduct)
        const product = tempCart[index]

        product.Count = product.Count + 1
        product.total = product.price * product.Count

        this.setState(() => {
            return { cart: [...tempCart] }
        },
            () => {
                this.addTotals()
            }
        )
    }
    decrement = id => {
        let tempCart = [...this.state.cart]
        const SelectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(SelectedProduct)
        const product = tempCart[index]

        product.Count = product.Count - 1

        if (product.Count === 0) {
            this.removeItem(id)
        }
        else {
            product.total = product.price * product.Count

            this.setState(() => {
                return { cart: [...tempCart] }
            },
                () => {
                    this.addTotals()
                }
            )
        }
    }
    removeItem = id => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItemById(id))
        let removedProduct = tempProducts[index]

        removedProduct.inCart = false
        removedProduct.Count = 0
        removedProduct.total = 0

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },
            () => {
                this.addTotals()
            }
        )
    }
    ClearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.setProducts()
            this.addTotals()
        })
    }
    addTotals = () => {
        let SubTotal = 0
        this.state.cart.map(item => (SubTotal += item.total))
        const tempTax = SubTotal * .1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = SubTotal + tax
        this.setState(() => {
            return {
                CartSubTotal: SubTotal,
                CartTax: tax,
                CartTotal: total
            }
        })
    }

    render() {
        return (
            <div>
                <ProductContext.Provider
                    value={{
                        ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModel: this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem,
                        ClearCart: this.ClearCart
                    }}
                >
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }