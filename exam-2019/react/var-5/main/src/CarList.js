import React from 'react';
import { AddCar } from './AddCar';

export class CarList extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: []
        };
    }   

    addNewCar = (newCar) => {
        this.setState({ cars: [...this.state.cars, newCar] });
    }

    render(){
        return (
            <div>
                <AddCar onAdd={this.addNewCar} />
                {
                    this.state.cars.map((car, index) => {
                        return (
                            <div key={index}>
                                Make: {car.make}, Model: {car.model}, Price: {car.price}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
