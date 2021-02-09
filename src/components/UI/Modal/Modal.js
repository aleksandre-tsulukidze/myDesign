import React from 'react';
import { motion } from "framer-motion";

import "./Modal.css";

const Modal = ({selectedImg, setSelectedImg}) => {

    const onClickedHandler = (event) => {
        if (event.target.classList.contains('backdrop')){
        setSelectedImg(null)
    }}

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className='backdrop' 
            onClick={onClickedHandler}>
            <motion.img initial={{y:'-100vh'}} animate={{y: 0}} src={selectedImg} alt='large pic' />
        </motion.div>
    );
};

export default Modal;