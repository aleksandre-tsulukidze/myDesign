import React, {Component} from 'react';
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import './Contact.css'
import Logo from '../../../assets/logoBig/new-logo-big.png'

class Contact extends Component  {

    state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
    }

    render() {

    const onSubmintHandler = (event) => {
        event.preventDefault()
        this.props.onSend(this.state.fname, this.state.lname, this.state.email, this.state.message)
        this.setState({fname: '', lname: '', email: '', message: ''})
    }

        return (
            <div style={{display: 'grid'}} >
                <form className='form' onSubmit={onSubmintHandler}>
                    <ul>
                        <li> <label htmlFor='fname' >First Name</label></li>
                        <li> <Input type="text"id="fname"placeholder="Your name.." value={this.state.fname} changed={event => {this.setState({fname: event.target.value})}} /></li>
                        <li> <label htmlFor='lname'>Last Name</label></li>
                        <li> <Input type="text"id="lname"placeholder="Your last name.." value={this.state.lname} changed={event => {this.setState({lname: event.target.value})}} /></li>
                        <li> <label htmlFor='email'>Email</label></li>
                        <li> <Input type="email"id="email"placeholder="Your email" value={this.state.email} changed={event => {this.setState({email: event.target.value})}} /></li>
                    </ul>
                    <div>
                        <label htmlFor='subject'>Subject</label>
                        <textarea style={{width: '400px', height: '150px'}} id="subject"placeholder="Write something.." value={this.state.message} onChange={event => {this.setState({message: event.target.value})}}></textarea>
                        <Button type='submit' btnType='Contact' >SUBMIT</Button>
                    </div>
                </form>
                <section className='container'>
                    <div className='div-img'>
                        <img src={Logo} alt='sites logo'/>
                    </div>
                    <div className='div-info'>
                        <h1>ჩვენი ელ-ფოსტა: </h1>
                        <p>contact@mydesign.ge</p>
                        <h1>საკონტაქტო ტელეფონი: </h1>
                        <p>593 30 33 36</p>
                    </div>
                </section>
            </div>
        );
    };
}


const mapDispatchToProps = dispatch => {
    return {
       onSend: (fname, lname, email, message) => dispatch(actions.mailSend(fname, lname, email, message))
    }
}

export default connect(null, mapDispatchToProps)(Contact);