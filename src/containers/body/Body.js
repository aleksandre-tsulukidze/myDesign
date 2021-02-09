import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { motion } from "framer-motion";

import Pages from "../../components/pages/Pages";
import Contact from "../../components/pages/Contact/Contact";
import "./Body.css";

class Body extends Component {


    render() {
        return (
            <motion.div 
                className='Body'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                >
                <Route path='/home/bedroom' component={Pages}/>
                <Route path='/home/children' component={Pages}/>
                <Route path='/home/kitchen' component={Pages}/>
                <Route path='/home/livingroom' component={Pages}/>
                <Route path='/home/office' component={Pages}/>
                <Route path='/home/done' component={Pages}/>
                <Route path='/home/other' component={Pages}/>
                <Route path='/home/contact' component={Contact}/>
                <Route path='/home' exact component={Pages}/>
            </motion.div>
        );
    }
}

export default Body;