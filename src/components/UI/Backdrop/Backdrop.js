import React from 'react'
import Style from './Backdrop.module.css';

const Backdrop = (props) => {
    return props.show ? <div className={Style.Backdrop} onClick={props.clicked}> </div> : null
}

export default Backdrop;