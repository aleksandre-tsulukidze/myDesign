import React, { Component } from "react";

import Logo from "../../components/UI/Logo/Logo";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                <div className={classes.Logo}><Logo height={'92px'} width={'92px'}/></div>
                <div className={classes.Other}>
                    <Link to='/home'>
                        MyDesign • 593 30 33 36
                    </Link>
                </div>
                <div className={classes.Other}> <Link to="/home/contact" >Contact </Link> </div> 
            </div>
        )
    }
}

export default Header