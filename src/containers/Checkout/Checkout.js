import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {

    state =  {
        
    }

    componentDidMount() {
        console.log("componentDidMount - Checkout")
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
                    ingredients={this.props.ingredients} 
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.url + '/contact-data'} exact 
                    render={() => (<ContactData ingredients={this.props.ingredients} price={this.props.totalPrice}/>)}/>
            </div>
        )
    }
}

const mapsStateProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}


export default connect(mapsStateProps)(Checkout);
