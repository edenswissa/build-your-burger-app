import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo'
import Style from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const SideDrawer = (props) => {

    let attachedClasses = [Style.SideDrawer, Style.Close];
    if(props.show) {
        attachedClasses = [Style.SideDrawer, Style.Open];
    }

    return (
        <Auxiliary>
            <Backdrop clicked={props.clicked} show={props.show}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={Style.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxiliary>
    );
}


export default SideDrawer;
