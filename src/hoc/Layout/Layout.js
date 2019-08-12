import React, { Component } from 'react';
import LayoutStyle from './Layout.module.css'
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer:false
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }; 
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar menuClicked={this.sideDrawerHandler}></Toolbar>
                <SideDrawer clicked={this.sideDrawerHandler} show={this.state.showSideDrawer}></SideDrawer>
                <main className={LayoutStyle.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;