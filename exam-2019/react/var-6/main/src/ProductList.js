import React from 'react';

export class ProductList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        };
    }

    addProduct = (product) => {
        this.setState({ products: [...this.state.products, product] });
    }

    render(){
        return(
            <div>
                <AddProduct onAdd={this.addProduct} />
                <ul>
                    {this.state.products.map((product, index) => (
                        <li key={index}>{product.name} - {product.category} - {product.price}</li>
                    ))}
                </ul>
            </div>
        )
    }
}