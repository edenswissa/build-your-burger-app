import React from 'react'
import Style from './MenuButton.module.css'

const MenuButton = (props) => {
    
    return(
        <div onClick={props.clicked} className={Style.MenuButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default MenuButton;