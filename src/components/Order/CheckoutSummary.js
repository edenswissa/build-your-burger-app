import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import Style from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {



    return (
        <div className={Style.CheckoutSummary}>
            <h1>Hope it will be a tasty burger!!</h1>
            <div style={{width:'100%' , margin:'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <hr></hr>
            <Button on_click={props.checkoutContinued} btnStyle="Success">Continue</Button>
            <Button on_click={props.checkoutCanceled} btnStyle="Danger">Cancel</Button>
        </div>
    );

}

export default CheckoutSummary;
