import React from 'react';
import Style from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className={Style.NavigationItem}>
            <NavLink to={props.link} activeClassName={Style.active} exact={props.exact}>{props.children}</NavLink>
        </li>)
}

export default NavigationItem;
