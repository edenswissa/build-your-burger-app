import React from 'react'
import Style from './Order.module.css';


const Order = (props) => {

    const ingredients = Object.keys(props.ingredients).map((key,index) => {
        return <span
                    key={key}
                    style ={{
                        textTransform:'capitalize', 
                        display:'inline-block', 
                        margin:'0 8px',
                        border:'1px solid black',
                        padding:'5px',
                        boxShadow:'1px 3px 3px #ccc'}}>
                         {key} ({props.ingredients[key]}) </span>
    })
    
    return (
        <div className={Style.Order}>
            <p>Ingredients : {ingredients}</p>
            <p>Price: <strong>{props.price} USD</strong></p>
        </div>
    );

};

export default Order;


