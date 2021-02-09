import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if(!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        return isValid
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
    }

    inputChangedHandler = (event, id) => {
        const updatedControle = {
            ...this.state.controls,
            [id] : {
                ...this.state.controls[id],
                value: event.target.value,
            }
        };
        this.setState({controls: updatedControle})
    }


    render () {
        const formElementArrey = [];
        for (let key in this.state.controls) {
            formElementArrey.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form = formElementArrey.map(element => {
                return (
                    <Input
                        key={element.id}
                        elementConfig={element.config.elementConfig}
                        placeholder={element.config.elementConfig.placeholder}
                        type={element.elementType}
                        value={element.value}
                        touched={element.touched}
                        changed={(event) => this.inputChangedHandler(event, element.id)}
                    />
                )}
            )
        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            <div style={{backgroundColor: '#E0D5BD'}}>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button>SUBMIT</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)