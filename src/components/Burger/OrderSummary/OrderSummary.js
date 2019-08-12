import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(key => {
            return (<li key={key}>
                <span style={{ textTransform: 'capitalize' }}>{key}:</span>
                {this.props.ingredients[key]}
            </li>);
        });

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Do you want to continue? </p>
                <Button btnStyle='Success' on_click={this.props.purchaseContinue}>Continue</Button>
                <Button btnStyle='Danger' on_click={this.props.purchaseCancel}>Cancel</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;