import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../../styles/login.css'
import PropTypes from 'prop-types';

export default class Account extends Component {

    login = () => {
        this.props.login();
    }

    render() {
        const { isAuth } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (isAuth) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
                <h1>login page</h1>
            </div>
        )
    }
}

Account.propTypes = {
    login: PropTypes.func,
    isAuth: PropTypes.bool
}