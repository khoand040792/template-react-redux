import React, { Component } from 'react';
import Header from '../../common/component/Header'
import Sidebar from '../../common/component/Sidebar'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Home extends Component {

    increaseNumber() {
        this.props.increase(this.props.countNumber);
    }

    onChangeSearch = (e) => {
        e.preventDefault();
        this.props.searchTable(e.target.value);
    }

    render() {
        const { isLoading,dataTables } = this.props;
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
                            {isLoading ? <h1 className="text-bold">Searching...</h1> : <h2 className="text-bold">{dataTables.join(', ')}</h2>}
                            <div className="form-group">
                                <input className="form-control" onChange={this.onChangeSearch} />
                            </div>
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

Home.propTypes = {
    increase: PropTypes.func,
    isLoading: PropTypes.bool,
    searchTable: PropTypes.func,
    dataTables: PropTypes.array
};