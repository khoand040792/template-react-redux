import React from 'react';
import { Link } from 'react-router-dom';
import { RemoveTokenPersitant } from '../utilities/utilities';
import '../../styles/header.css'

var logo = require('../../assert/common/logo.png');
var miniLogo = require('../../assert/common/minilogo.png');
var usFlag = require('../../assert/common/us.png');
var jpFlag = require('../../assert/common/jp.png');

class Header extends React.Component {

    logOut = () => {
        RemoveTokenPersitant();
    }

    // pushMenu(e) {
    //     e.preventDefault();
    //     var body = document.body;
    //     if (window.innerWidth > 768) {
    //         if (body.className.indexOf('sidebar-collapse') === -1) {
    //             body.className += ' sidebar-collapse';
    //         } else {
    //             body.className = body.className.replace(' sidebar-collapse', '');
    //         }
    //     } else {
    //         if (body.className.indexOf('sidebar-open') === -1) {
    //             body.className += ' sidebar-open';
    //         } else {
    //             body.className = body.className.replace(' sidebar-open', '');
    //         }
    //     }
    // }

    render() {

        return (
            <header className="main-header" >
                <Link to={"/"} className="logo">
                    <span className="logo-mini"><img src={miniLogo} alt="logo" /></span>
                    <span className="logo-lg"><img src={logo} alt="logo" /></span>
                </Link>

                <nav className="navbar navbar-static-top">
                    <a className="sidebar-toggle"
                        data-toggle="push-menu"
                        role="button"
                    >
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown dropdown-language">
                                <a data-toggle="dropdown">
                                    <img alt="" src={usFlag} />
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default" role="menu">
                                    <li className="">
                                        <a href="/home/switch?culture=ja-JP">
                                            <img alt="" src={jpFlag} />&nbsp;<span>日本語</span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="/home/switch?culture=en-US">
                                            <img alt="" src={usFlag} />&nbsp;<span>English</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown user user-menu">
                                <span>phong.ld@3si.vn</span>
                            </li>
                            <li>
                                <a className="btn-logout"
                                    href='/login'
                                    onClick={this.logOut}
                                >Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;