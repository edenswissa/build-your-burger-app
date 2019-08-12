import React from 'react';
import Style from './BuildControl.module.css';

const BuildControl = (props) => {
    return(
        <div className={Style.BuildControl}>
            <div className={Style.Label}>{props.label}</div>
            <button className={Style.More} onClick={props.addIngredient}> + </button>
            <button className={Style.Less} onClick={props.removeIngredient} disabled={props.disabled}> - </button>
        </div>
    );
}

export default BuildControl;