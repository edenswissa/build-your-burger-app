import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICE = {
    cheese: 0.5,
    salad: 0.4,
    meat: 1.4,
    bacon: 0.8
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
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
        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
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
            this.setState({ ingredients: newIngredients, totalPrice: newPrice });
            this.updatePurchasableState(newIngredients);
        }

    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
        console.log('cancel');
    }

    purchaseContinueHandler = () => {
        this.setState({loading:true});
        console.log('continue');
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice
        // }
        setTimeout(() => {
            console.log("Simulates a server request");
            this.setState({loading:false , purchasing:false});
            const params = Object.keys(this.state.ingredients).map(key =>{
                return key + "=" + this.state.ingredients[key];
            });
            params.push('price=' + this.state.totalPrice);
            const paramsString = params.join('&');
            this.props.history.push({
                pathname:'/checkout',
                search:'?'+paramsString
            });
        },2000);
        // axios.post('/post', order).then((response) => {
        //     console.log(response);
        //     this.setState({loading:false , purchasing:false});
        // },error => {
        // })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
            price={this.state.totalPrice}>
        </OrderSummary>;

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>;
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
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

export default WithErrorHandler(BurgerBuilder,axios);