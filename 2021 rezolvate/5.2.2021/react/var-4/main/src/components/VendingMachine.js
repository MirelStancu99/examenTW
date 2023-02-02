import React, { Component } from 'react'
import Product from './Product'
import ProductStore from '../stores/ProductStore'

class VendingMachine extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            tokens: 0
        }

        this.addToken = () => {
            this.setState({ tokens: this.state.tokens + 1 }, () => console.log(this.state.tokens));
        }

        this.buyProduct = (price) => {
            if (price > this.state.tokens) {
                this.setState({ tokens: this.state.tokens })
            }
            else {
                this.setState({ tokens: this.state.tokens - price }, () => console.log(this.state.tokens))
            }
        }
    }

    componentDidMount() {
        this.store=new ProductStore()
        this.setState({products:this.store.getAll()})
    }


    render() {
        return (
            <div>
                {this.state.products.map((el, index) => <Product key={index} name={el.name} price={el.price} onBuy={this.buyProduct} />)}
                <div>Tokens: {this.state.tokens}</div>
                <input type="button" value="add token" onClick={this.addToken}/>
            </div>
        )
    }
}

export default VendingMachine