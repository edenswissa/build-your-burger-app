import React from 'react';
import Style from './NavigationItem.module.css';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className={Style.NavigationItem}>
            <Link to={props.link} className={props.active ? Style.active : null}>{props.children}</Link>
        </li>)
}

export default NavigationItem;
