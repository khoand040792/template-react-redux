import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidebar.css'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: 0
        }
    }
    onClickSidebar(numb) {
        this.setState({
            isMenuActive: numb
        });
    }
    changeLanguage(e) {

    }
    render() {
        return (
            <aside className="main-sidebar wrapper">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="active" onClick={() => this.onClickSidebar(0)}>
                            <Link to="/" >
                                <i className="fa fa-home"></i> <span className="margin-icon-sidebar"> {"main"}</span>
                            </Link>
                        </li>
                        <li className={this.state.isMenuActive === 1 ? "active" : ""} onClick={() => this.onClickSidebar(1)}>
                            <Link to="/forecast">
                                <i className="fa fa-cloud"></i> <span className="margin-icon-sidebar"> {"home"}</span>
                            </Link>
                        </li>
                        <li className={this.state.isMenuActive === 2 ? "active" : ""} onClick={() => this.onClickSidebar(2)}>
                            <Link to="/planning">
                                <i className="fa fa-list"></i> <span className="margin-icon-sidebar"> {"menub"}</span>
                            </Link>
                        </li>
                        <li className={this.state.isMenuActive === 3 ? "active" : ""} onClick={() => this.onClickSidebar(3)}>
                            <Link to="/profile">
                                <i className="fa fa-user"></i> <span className="margin-icon-sidebar"> {"menuc"}</span>
                            </Link>
                        </li>
                        <li className={this.state.isMenuActive === 4 ? "active" : ""} onClick={() => this.onClickSidebar(4)}>
                            <Link to="/about" >
                                <i className="fa fa-info-circle"></i> <span className="margin-icon-sidebar"> {"menud"}</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}
export default Sidebar;