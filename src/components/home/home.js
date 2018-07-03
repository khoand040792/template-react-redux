import React, { Component } from 'react';
import Header from '../../common/component/Header'
import Sidebar from '../../common/component/Sidebar'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {

    increaseNumber() {
        this.props.increase(this.props.countNumber);
    }

    render() {
        if (true) {
            return (
                <div className="wrapper" >
                    <Header />
                    <Sidebar />
                    <div className="content-wrapper">
                        <div className="text-center">
                            <h1>Home page</h1>
                            <p>{this.props.countNumber}</p>
                            <button className="btn btn-primary"
                                onClick={
                                    () => this.increaseNumber()
                                }
                                ref="numberCount"
                            >Click to increase number</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                //pathname: "/login", state: { from: props.location }                
                <Redirect to={{ pathname: "/login" }} />
            )
        }
    }
}