import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { connect } from "react-redux";

import classes from "./Img.module.css";
import {motion} from 'framer-motion'

const Images = (props) => {

    let page = (
        <div className={classes.Img}>
            <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src={props.src}
                alt={props.alt}
                onClick={props.modalClicked}/>
        </div> 
    )

    if (props.token) {
        page = (
            < motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={classes.Img}>
                <TiDeleteOutline style={{boxShadow: "3px 4px 6px rgb(80, 80, 80)"}} size='2em' className={classes.Icon} onClick={props.deleteClicked}/>
                <motion.img 
                    src={props.src}
                    alt={props.alt}
                    onClick={props.modalClicked}/>
            </motion.div> 
        );
    }

    return (
        <div>
            {page}
        </div> 
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Images); 