import React from 'react';
import {NavLink} from 'react-router-dom';

class LeftSidenav extends React.Component {
    render() {
        return (
            <ul className="vertical menu" data-responsive-menu="drilldown medium-accordion"
                style={{maxWidth: "250px"}}>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <ul className="vertical menu">
                        <li>
                            <NavLink to="#">Item 1A</NavLink>
                            <ul className="vertical menu">
                                <li><NavLink to="#">Item 1A</NavLink></li>
                                <li><NavLink to="#">Item 1B</NavLink></li>
                                <li><NavLink to="#">Item 1C</NavLink></li>
                                <li><NavLink to="#">Item 1D</NavLink></li>
                                <li><NavLink to="#">Item 1E</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="#">Item 1B</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/account">Acount</NavLink>
                    <ul className="vertical menu">
                        <li><NavLink to="#">Item 2A</NavLink></li>
                        <li><NavLink to="#">Item 2B</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/transaction">Transation</NavLink>
                    <ul className="vertical menu">
                        <li><NavLink to="#">Item 3A</NavLink></li>
                        <li><NavLink to="#">Item 3B</NavLink></li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default LeftSidenav;
