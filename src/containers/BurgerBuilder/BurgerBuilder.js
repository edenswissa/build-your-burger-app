import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        console.log('componentDidMount - BurgerBuilder , GET method in comment')
        // axios.get('/get').then(response => {
        //     console.log(response);
        //     const ingredients = response.data.ingredients;
        //     Object.keys(ingredients).forEach(key => {
        //         for(let i =0; i < ingredients[key]; i++) {
        //             this.addIngredientHandler(key);
        //         }
        //     });
        // });
    }

    updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key];
        }).reduce((sum, arrItem) => {
            return sum + arrItem;
        }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.setState({loading:true});
        setTimeout(() => {
            this.props.history.push('/checkout');
        },2000);
    }

    render() {
        const disableInfo = {
            ...this.props.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary
            ingredients={this.props.ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
            price={this.props.price}>
        </OrderSummary>;

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>;
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                    addIngredient={this.props.onAddIngredient}
                    removeIngredient={this.props.onRemoveIngredient}
                    disabled={disableInfo}
                    price={this.props.price}
                    purchasable={this.updatePurchasableState(this.props.ingredients)}
                    ordered={this.purchaseHandler} />
            </Auxiliary>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingredientName) => dispatch({type:actionTypes.ADD_INGREDIENT , ingredientName:ingredientName}),
        onRemoveIngredient: (ingredientName) => dispatch({type:actionTypes.REMOVE_INGREDIENT , ingredientName:ingredientName})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));