import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
        totalPrice:4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type] = updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = INGREDIENT_PRICE[type] + oldPrice;
        this.setState({ ingredients: newIngredients, totalPrice: newPrice });
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
        }
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {

        }

        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <p>Price: {this.state.totalPrice}</p>
                <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;