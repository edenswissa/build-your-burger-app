import React from 'react'
import Style from './Input.module.css';

const Input = (props) => {

    let inputElement = null;
    let inputElementsCssClasses = [Style.InputElement];

    if(props.invalid && props.shouldValid && props.touched) {
        inputElementsCssClasses.push(Style.Invalid);
    }
    
    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                            className={inputElementsCssClasses.join(' ')} 
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} />
            break;
        case('textarea'):
            inputElement = <textarea 
                            className={inputElementsCssClasses.join(' ')} 
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} />
            break;
        default:
            inputElement = <input 
                            className={inputElementsCssClasses.join(' ')} 
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} /> 
    }
    

    return(
        <div className={Style.Input}>
            <label className={Style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;
