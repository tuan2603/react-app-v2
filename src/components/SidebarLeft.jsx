import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/brand/logo.png'
import sygnet from '../assets/img/brand/sygnet.png'

class SidebarLeft extends React.Component {
    render() {
        return (
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#main-menu" aria-controls="main-menu" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo"/></Link>
                        <Link className="navbar-brand hidden" to="/"><img src={sygnet} alt="Logo"/></Link>
                    </div>

                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/page-categories.html"> <i className="menu-icon fa ti-align-justify"></i> Danh Mục </Link>
                            </li>
                            <li className="active">
                                <Link to="/page-users.html"> <i className="menu-icon fa ti-align-justify"></i> Danh Mục </Link>
                            </li>
                            <h3 className="menu-title">UI elements</h3>
                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-laptop"></i>Components</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-puzzle-piece"></i><Link to="ui-buttons.html">Buttons</Link>
                                    </li>
                                    <li><i className="fa fa-id-badge"></i><Link to="ui-badges.html">Badges</Link></li>
                                    <li><i className="fa fa-bars"></i><Link to="ui-tabs.html">Tabs</Link></li>
                                    <li><i className="fa fa-share-square-o"></i><Link to="ui-social-buttons.html">Social
                                        Buttons</Link></li>
                                    <li><i className="fa fa-id-card-o"></i><Link to="ui-cards.html">Cards</Link></li>
                                    <li><i className="fa fa-exclamation-triangle"></i><Link
                                        to="ui-alerts.html">Alerts</Link></li>
                                    <li><i className="fa fa-spinner"></i><Link to="ui-progressbar.html">Progress
                                        Bars</Link></li>
                                    <li><i className="fa fa-fire"></i><Link to="ui-modals.html">Modals</Link></li>
                                    <li><i className="fa fa-book"></i><Link to="ui-switches.html">Switches</Link></li>
                                    <li><i className="fa fa-th"></i><Link to="ui-grids.html">Grids</Link></li>
                                    <li><i className="fa fa-file-word-o"></i><Link
                                        to="ui-typgraphy.html">Typography</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-table"></i><Link to="tables-basic.html">Basic Table</Link>
                                    </li>
                                    <li><i className="fa fa-table"></i><Link to="tables-data.html">Data Table</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"></i><Link to="forms-basic.html">Basic
                                        Form</Link></li>
                                    <li><i className="menu-icon fa fa-th"></i><Link to="forms-advanced.html">Advanced
                                        Form</Link></li>
                                </ul>
                            </li>

                            <h3 className="menu-title">Icons</h3>

                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-fort-awesome"></i><Link
                                        to="font-fontawesome.html">Font Awesome</Link></li>
                                    <li><i className="menu-icon ti-themify-logo"></i><Link to="font-themify.html">Themefy
                                        Icons</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </Link>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-line-chart"></i><Link to="charts-chartjs.html">Chart
                                        JS</Link></li>
                                    <li><i className="menu-icon fa fa-area-chart"></i><Link to="charts-flot.html">Flot
                                        Chart</Link></li>
                                    <li><i className="menu-icon fa fa-pie-chart"></i><Link to="charts-peity.html">Peity
                                        Chart</Link></li>
                                </ul>
                            </li>

                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-map-o"></i><Link to="maps-gmap.html">Google
                                        Maps</Link></li>
                                    <li><i className="menu-icon fa fa-street-view"></i><Link to="maps-vector.html">Vector
                                        Maps</Link></li>
                                </ul>
                            </li>
                            <h3 className="menu-title">Extras</h3>
                            <li className="menu-item-has-children dropdown">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-sign-in"></i><Link
                                        to="page-login.html">Login</Link></li>
                                    <li><i className="menu-icon fa fa-sign-in"></i><Link
                                        to="page-register.html">Register</Link></li>
                                    <li><i className="menu-icon fa fa-paper-plane"></i><Link to="pages-forget.html">Forget
                                        Pass</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        );
    }
}

export default SidebarLeft;
