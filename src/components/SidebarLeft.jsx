import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/brand/logo.png'
import sygnet from '../assets/img/brand/sygnet.png'
import './SidebarLeft.css';
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
                                <Link to="/trang.html"> <i className="menu-icon fa ti-align-justify"></i> Trang </Link>
                            </li>
                            <li className="active">
                                <Link to="/quangcao.html"> <i className="menu-icon fa ti-align-justify"></i> Slider </Link>
                            </li>

                            <li className="active">
                                <Link to="/cauhoi.html"> <i className="menu-icon fa ti-align-justify"></i> Câu hỏi </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </aside>
        );
    }
}

export default SidebarLeft;
