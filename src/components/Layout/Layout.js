import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import LayoutStyle from './Layout.module.css'

const Layout = (props) => {
    return (
        <Auxiliary>
            <div>Toolbar etc</div>
            <main className={LayoutStyle.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default Layout;