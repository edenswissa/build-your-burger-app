import React from 'react';
import Style from './BuildControls.module.css';
import BuildControl from './BuildControl.js/BuildControl';

const controls = [
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
]


const BuildControls = (props) => {
    return(
        <div className={Style.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((element,index) => {
                return <BuildControl 
                            key={element.type+index} 
                            label={element.label}
                            addIngredient={() => props.addIngredient(element.type)}
                            removeIngredient={() => props.removeIngredient(element.type)}
                            disabled={props.disabled[element.type]} />
            })}
            <button className={Style.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
        </div>
    );
}

export default BuildControls;