import React, {Component} from "react";
import { Redirect, Route } from "react-router-dom";

import User from "./User";
import Admin from "./Admin";
import './App.css';


class App extends Component {

  render() {  
    return (
      <div className="App">
        <Route path='/' exact><Redirect to="/home"/></Route>
        <Route path='/home' component={User}/>
        <Route path='/admin'component={Admin}/>
      </div>
    );
  }
}

export default App;
