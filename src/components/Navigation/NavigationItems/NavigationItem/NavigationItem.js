import React from 'react';
import Style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={Style.NavigationItem}>
            <a href={props.link} className={props.active ? Style.active : null}>{props.children}</a>
        </li>)
}

export default NavigationItem;
