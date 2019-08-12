import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICE = {
    cheese: 0.5,
    salad: 0.4,
    meat: 1.4,
    bacon:0.8
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }

    updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key];
        }).reduce((sum,arrItem) => {
            return sum + arrItem;
        },0);
        this.setState({purchasable: sum > 0});
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type] = updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = INGREDIENT_PRICE[type] + oldPrice;
        this.setState({ ingredients: newIngredients, totalPrice: newPrice });
        this.updatePurchasableState(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updateCount = oldCount - 1;
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type] = updateCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICE[type];
            this.setState({ ingredients: newIngredients, totalPrice:newPrice });
            this.updatePurchasableState(newIngredients);
        }
        
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
        console.log('cancel');
    }

    purchaseContinueHandler = () => {
        this.setState({purchasing:false});
        console.log('continue');
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key]=disableInfo[key] <=0;
        }
        

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        purchaseContinue={this.purchaseContinueHandler}
                        purchaseCancel={this.purchaseCancelHandler}
                        price={this.state.totalPrice}>    
                    </OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler} 
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;