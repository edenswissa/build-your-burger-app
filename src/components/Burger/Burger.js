import React from 'react';
import BurgerStyle from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((tmp,i) => {
                return <BurgerIngredient key={key + i} type={key} />
            })
        }).reduce((arr,el) => {
            return arr.concat(el);
        },[]);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>please add ingredients</p>
    }
    
    return(
        <div className={BurgerStyle.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;