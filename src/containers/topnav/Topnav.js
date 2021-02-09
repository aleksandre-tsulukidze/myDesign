import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";
import classes from "./Topnav.module.css"

class TopNav extends Component {
    
    render () {

        let pages = (
            this.props.pages.map(page => {
                return (
                    <div key={page.value} className={classes.Btn}>
                        <Link to={'/home/' + page.value}><Button btnType="Basic">{page.name}</Button></Link>
                    </div>
                )
            })
        )

        if (this.props.token != null) {
            pages = (
                this.props.pages.map(page => {
                    return (
                        <div key={page.value} className={classes.Btn}>
                            <Link to={'/admin/' + page.value}><Button btnType="Custom" >{page.name}</Button></Link>
                        </div>
                    )
                })
            )
        }

        return (
            <div className={classes.Topnav}>
                {pages}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        pages: state.category.pages,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(TopNav);