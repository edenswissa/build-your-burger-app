import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice: 4
};


const INGREDIENT_PRICE = {
    cheese: 0.5,
    salad: 0.4,
    meat: 1.4,
    bacon: 0.8
};


const burgerBuilder = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            }
    }
    return state;
}

export default burgerBuilder;
