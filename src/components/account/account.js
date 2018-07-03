import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/login.css'

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transform: {
                "transform": "scale(0.5)"//rotate(0deg)
            }
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                transform: {
                    "transform": "scale(1)",//rotate(360deg)
                    "transitionDuration": "2s"
                }
            })
        }, 500)
    }

    login(e) {
        e.preventDefault();
        debugger
        let username = this.refs.username.value;
        let password = this.refs.password.value
        // validate 

        // login
        alert("username: " + username + ", pass:" + password);
        this.props.login(username, password)
    }

    render() {
        return (
            <div className="wrapper hold-transition login-page">
                <div className="login-box" style={this.state.transform}>
                    <div className="login-logo">
                        <Link to="/"><b>One</b>PLUS</Link>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="/login" method="post" onSubmit={(e) => this.login(e)}>
                            <div className="form-group has-feedback">
                                <span className="fa fa-envelope form-control-feedback"> Email:</span>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    ref="username" />
                            </div>
                            <div className="form-group has-feedback">
                                <span className="fa fa-lock form-control-feedback"> Password:</span>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    ref="password" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8 col-md-8">
                                    <div className="checkbox">
                                        <label>
                                            <div aria-checked="false" aria-disabled="false" style={{ "position": "relative" }}>
                                                <input type="checkbox" /> Remember Me
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4 col-md-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <Link to="/" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using Facebook</Link>
                            <Link to="/" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using Google+</Link>
                        </div>

                        <Link to="/">I forgot my password</Link>
                        <br />
                        <Link to="/" className="text-center">Register a new membership</Link>

                    </div>
                </div>
            </div>
        )
    }
}