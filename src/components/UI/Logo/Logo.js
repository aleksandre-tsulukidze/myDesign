import React from 'react';

import Logo from "../../../assets/logoSmall/new-logo-small.png"
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height, width: props.width}} >
        <img src={Logo} alt="StairImage"/>
    </div>
)

export default logo