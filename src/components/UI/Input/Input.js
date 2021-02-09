import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <input 
            className={classes.Input}
            {...props.elementConfig}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.changed}
            />
    )
};

export default Input