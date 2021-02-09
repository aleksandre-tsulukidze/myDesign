import React, {Component} from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import Auth from "./containers/auth/Auth"
import Main from "./containers/Main";
import Pages from "./components/pages/Pages";
import Emails from "./components/pages/Emails/Emails";
import SlideShow from "./components/photos/SlideShow/SlideShow";

class Admin extends Component {

    render() {
        let page = <Auth/>
        if (this.props.token != null) {
            page = (
                <div>
                    <Main/>
                    <Route path='/admin/bedroom' component={Pages}/>
                    <Route path='/admin/kitchen' component={Pages}/>
                    <Route path='/admin/children' component={Pages}/>
                    <Route path='/admin/livingroom' component={Pages}/>
                    <Route path='/admin/office' component={Pages}/>
                    <Route path='/admin/other' component={Pages}/>
                    <Route path='/admin/done' component={Pages}/>
                    <Route path='/admin/slideshow' component={SlideShow}/>
                    <Route path='/admin/mails' component={Emails}/>
                </div>
            )
        }
        return(
            <div
                style={{backgroundColor: '#E0D5BD'}}>
                {page}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Admin)