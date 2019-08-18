import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom'  

class Checkout extends Component {

    state =  {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice:null
    }

    componentWillMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0 ;
        for (let entry of queryParams.entries()) {
            if(entry[0] === 'price') {
                totalPrice = +entry[1];
            }
            else{
                ingredients[entry[0]] = +entry[1];
            }   
        }
        console.log(ingredients);
        this.setState({ingredients:ingredients, totalPrice: totalPrice});
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler =() => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.url + '/contact-data'} exact 
                    render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>)}/>
            </div>
        )
    }
}

export default Checkout;
