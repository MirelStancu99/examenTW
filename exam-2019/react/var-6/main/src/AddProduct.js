import React from 'react';

export class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
        this.setState({ name: '', category: '', price: '' });
    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInputChange} 
                />
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={this.state.category} 
                    onChange={this.handleInputChange} 
                />
                <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    value={this.state.price} 
                    onChange={this.handleInputChange} 
                />
                <button onClick={this.addProduct}>Add Product</button>
            </div>
        )
    }
}