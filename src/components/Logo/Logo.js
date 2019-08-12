import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png';
import Style from './Logo.module.css';

const Logo = (props) => {
   return(<div className={Style.Logo}>
        <img src={burgerLogo} alt="myBurger" title="My_Burger_Logo"></img>
    </div>);
}

export default Logo;
