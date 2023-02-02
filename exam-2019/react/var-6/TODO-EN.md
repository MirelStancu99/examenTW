# Subject 4
# Topic: REACT


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

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

import React from 'react';

export class ProductList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        };
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}


# Having the following application created with `create-react-app` complete the following tasks:
- `AddProduct` component should be rendered inside `ProductList` component;
- `AddProduct` component should contain 3 inputs with `id` and `name`: `name`, `category`, `price`;
- `AddProduct` component should contain an input of type `button` with the value `add product`, used to trigger `addProduct` method;
- `AddProduct` component inside `ProductList` should contain a `props` called `onAdd`;
- When pressing `add product` a new item should be displayed in `ProductList` component;

