import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { RemoveTokenPersitant } from '../utilities/utilities';
import '../../styles/header.css'

class Header extends React.Component {

    logOut = () => {
        RemoveTokenPersitant();
    }

    pushMenu(e) {
        e.preventDefault();
        var body = document.body;
        if (window.innerWidth > 768) {
            if (body.className.indexOf('sidebar-collapse') === -1) {
                body.className += ' sidebar-collapse';
            } else {
                body.className = body.className.replace(' sidebar-collapse', '');
            }
        } else {
            if (body.className.indexOf('sidebar-open') === -1) {
                body.className += ' sidebar-open';
            } else {
                body.className = body.className.replace(' sidebar-open', '');
            }
        }
    }

    render() {

        return (
            <header className="main-header" >
                <Link to={"/"} className="logo">
                    <span className="logo-mini"><b>O</b>PL</span>
                    <span className="logo-lg"><b>One</b>PLUS</span>
                </Link>

                <nav className="navbar navbar-static-top">
                    <Link to={"#"} className="sidebar-toggle"
                        data-toggle="push-menu"
                        role="button"
                        onClick={
                            this.pushMenu
                        }>
                        <span className="sr-only">Toggle navigation</span>
                    </Link>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="user user-menu">
                                <a href='/login' onClick={this.logOut} data-toggle="control-sidebar" className="pull-left">
                                    <img src={require('../../styles/img/profile-user.png')}
                                        alt="user profile"
                                        height="50px"
                                        width="50px" />
                                    <span className="hidden-xs"> Khoa.nd </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;