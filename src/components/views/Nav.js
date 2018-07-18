import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/img/logo.png';

class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                   <NavLink to="/"> <img src={logo} style={{height:"24px"}}  />
                   </NavLink>
                </div>
                <div className="top-bar-right">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Site Title</li>
                        <li>
                            <NavLink to="#">One</NavLink>
                            <ul className="menu vertical">
                                <li><NavLink to="#">One</NavLink></li>
                                <li><NavLink to="#">Two</NavLink></li>
                                <li><NavLink to="#">Three</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="#">Two</NavLink></li>
                        <li><NavLink to="#">Three</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
