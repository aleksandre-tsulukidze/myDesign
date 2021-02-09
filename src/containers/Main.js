import React, { Component } from "react";
import { connect } from "react-redux";

import UploadForms from "../components/pages/uploadForms/UploadForms";
import Header from "./header/Header";
import Topnav from "./topnav/Topnav";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button/Button";



class Main extends Component {
    
    render() {
        let main = (
            <div>
                <Header/>
                <Topnav/>
                <Body/>
                <Footer/>
            </div>
        )
        if (this.props.token != null) {
            main = (
            <div style={{backgroundColor: '#A89D7F'}}>
                <UploadForms/>
                <Link to='/admin/mails'><Button>Emalis</Button> </Link>
                <Topnav/>
            </div>
            )
        }

        return (
            <div>
                {main}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Main)