import React from 'react';
import Style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from './MenuButton/MenuButton';

const Toolbar = (props) => {
    return(
        <header className={Style.Toolbar}>
            <MenuButton clicked={props.menuClicked}></MenuButton>
            <div className={Style.Logo}>
                <Logo></Logo>
            </div>
            <nav className={Style.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar;