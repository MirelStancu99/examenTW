import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <button id="buy" value="buy" onClick={()=>{this.props.onBuy(this.props.price)}}>Buy</button>
            </div>


        )
    }

}

export default Product