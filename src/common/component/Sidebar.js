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
    // onClickSidebar(numb) {
    //     this.setState({
    //         isMenuActive: numb
    //     });
    // }
    // changeLanguage(e) {

    // }
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="treeview" data-extra-classname="menu-open">
                            <a>
                                <i className="fa fa-user"></i><span>User management</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-chevron-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" >
                                <li ><Link to="/"><i className="fa fa-users"></i>Department</Link></li>
                                <li><Link to="/forecast"><i className="fa fa-user"></i>User</Link></li>
                                <li><a href="/forecast"><i className="fa fa-mobile-phone"></i>Smartphone setting</a></li>
                            </ul>
                        </li>

                        <li className="treeview" data-extra-classname="menu-open">
                            <a>
                                <i className="fa fa-mail-forward"></i><span> Access management</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-chevron-right small"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" >
                                <li><a href="/accesslevel/list"><i className="ion-levels"></i>Access level</a></li>
                                <li><a href="/timezone/list"><i className="ion-ios-settings"></i> Timezone</a></li>
                                <li><a href="/holiday/list"><i className="ion-plane"></i>Holiday</a></li>
                                <li><a href="/multipersonrules/list"><i className="ion-ios-people"></i>Multi person rule</a></li>
                            </ul>
                        </li>

                        <li className="treeview" data-extra-classname="menu-open">
                            <a >
                                <i className="fa fa-mail-forward"></i><span> Door management</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-chevron-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" >
                                <li><a href="/device/list"><i className="ion-settings"></i>Device setting</a></li>
                                <li><a href="/wgsetting/list"><i className="ion-planet"></i>WG setting</a></li>
                            </ul>
                        </li>

                        <li className="treeview" data-extra-classname="menu-open">
                            <a >
                                <i className="fa fa-line-chart"></i><span> Report</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-chevron-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" >
                                <li><a href="/report/monitoring"><i className="fa fa-bar-chart"></i>Monitoring</a></li>
                                <li><a href="/report/smartphonereport"><i className="fa fa-bar-chart"></i>Smartphone Report</a></li>
                                <li><a href="/report/eventreport"><i className="fa fa-bar-chart"></i>Report</a></li>
                                <li><a href="/report/systemlog"><i className="fa fa-bar-chart"></i>System Log</a></li>
                                <li><a href="/report/smartphonelog"><i className="fa fa-bar-chart"></i>Smartphone Log</a></li>
                            </ul>
                        </li>
                        <li className="treeview" data-extra-classname="menu-open">
                            <a >
                                <i className="fa fa-vcard-o"></i><span> Account management</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-chevron-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" >
                                <li>
                                    <a href="/account/list">
                                        <i className="fa fa-user-circle"></i>
                                        <span>Account</span>
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li className="treeview" data-extra-classname="menu-open">
                            <a >
                                <i className="fa fa-book"></i><span>MANUAL</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-chevron-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" >
                                <li><a href="/manual" target="_blank"><i className="fa fa-file-pdf-o"></i><span>Pdf</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}
export default Sidebar;