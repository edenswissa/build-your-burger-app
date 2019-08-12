import React from 'react'
import Style from './Button.module.css'; 

const Button = (props) => {
    return <button onClick={props.on_click} className={[Style.Button, Style[props.btnStyle]].join(' ')} >{props.children}</button>
}

export default Button;