import React from 'react';

export class AddCar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: '',
            model: '',
            price: ''
        }
    }

    addCar = () => {
        let car = {
            make: this.state.make,
            model: this.state.model,
            price: this.state.price
        };
        this.props.onAdd(car);
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return (
            <div>
                <input id="make" name="make" onChange={this.handleInputChange} value={this.state.make} />
                <input id="model" name="model" onChange={this.handleInputChange} value={this.state.model} />
                <input id="price" name="price" onChange={this.handleInputChange} value={this.state.price} />
                <button onClick={this.addCar}>Add Car</button>
            </div>
        )
    }
}