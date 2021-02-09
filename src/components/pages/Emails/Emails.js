import React, { Component } from 'react';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { TiDeleteOutline } from "react-icons/ti";

import * as actions from "../../../store/actions/index";
import './Emails.css';
import Spinner from "../../UI/Spinner/Spinner";

class Emails extends Component {

    componentDidMount() {
        this.props.onGet()
        console.log(this.props.mails)
    }

    onDeleteEvent = id => {
        if (window.confirm('Are You Sure To Delete This Image')) { 
            this.props.onDelete(id)
        }
    }

    componentDidUpdate() {
        this.props.onGet()
    }

   render() {

    let page = (<Spinner/>)

    if (this.props.loading === false) {
        page = (
            <div className='wraper'>
                {this.props.mails.map(mail => {
                return (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        key={mail.id}
                        className='content'>
                        <TiDeleteOutline id={mail.id} className='icon' size='2.3em' onClick={() => this.onDeleteEvent(mail.id)} />
                        <h2>You have an Email from: {mail.fname}, {mail.lname}</h2><hr/>
                        <h3>{mail.message}</h3> <hr/>
                        <h2>Senders Email: {mail.email} </h2>
                    </motion.div>
                )
                })}
            </div>
        )
    }

    return (
        <div>
            {page}
        </div>
    );
   }
};

const mapStateToProps = state => {
    return {
        mails: state.contact.mails,
        loading: state.contact.loading
    };
};

const mapDispatcToProps = dispatch => {
    return {
        onGet: () => dispatch(actions.mailGet()),
        onDelete: (id) => dispatch(actions.mailDelete(id))
    };
};

export default connect(mapStateToProps, mapDispatcToProps)(Emails);