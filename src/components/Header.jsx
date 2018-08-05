import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import $ from 'jquery';
import {connect} from "react-redux";
import * as config from '../utils';
class Header extends React.Component {
    componentDidMount() {

        $('#menuToggle').click(function () {
            $('body').toggleClass('open');
        });

        $('.search-trigger').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').addClass('open');
        });

        $('.search-close').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').removeClass('open');
        });

    }


    render() {
        let {username} = this.props;
        return (
            <header id="header" className="header">
                <div className="header-menu">
                    <div className="col-sm-7">
                        <a id="menuToggle" className="menutoggle pull-left"><i
                            className="fa fa fa-tasks"></i></a>
                        <div className="header-left">
                            <button className="search-trigger"><i className="fa fa-search"
                                                                  style={{color: "#e5cc08"}}></i></button>
                            <div className="form-inline">
                                <form className="search-form">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search ..."
                                           aria-label="Search"/>
                                    <button className="search-close" type="submit"><i
                                        className="fa fa-close"></i></button>
                                </form>
                            </div>

                            <div className="dropdown for-notification">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="notification" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <i className="fa fa-bell" style={{color: "#e5cc08"}}></i>
                                    <span className="count bg-danger">5</span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="notification">
                                    <p className="red">You have 3 Notification</p>
                                    <NavLink className="dropdown-item media bg-flat-color-1" to="#">
                                        <i className="fa fa-check"></i>
                                        <p>Server #1 overloaded.</p>
                                    </NavLink>
                                    <NavLink className="dropdown-item media bg-flat-color-4" to="#">
                                        <i className="fa fa-info"></i>
                                        <p>Server #2 overloaded.</p>
                                    </NavLink>
                                    <NavLink className="dropdown-item media bg-flat-color-5" to="#">
                                        <i className="fa fa-warning"></i>
                                        <p>Server #3 overloaded.</p>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="dropdown for-message">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="message"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ti-email" style={{color: "#e5cc08"}}></i>
                                    <span className="count bg-primary">9</span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="message">
                                    <p className="red">You have 4 Mails</p>
                                    <NavLink className="dropdown-item media bg-flat-color-1" to="#">
                                                <span className="photo media-left"><img alt="avatar"
                                                                                        src="images/avatar/1.jpg"/></span>
                                        <span className="message media-body">
                                    <span className="name float-left">Jonathan Smith</span>
                                    <span className="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                                    </NavLink>
                                    <NavLink className="dropdown-item media bg-flat-color-4" to="#">
                                                <span className="photo media-left"><img alt="avatar"
                                                                                        src="images/avatar/2.jpg"/></span>
                                        <span className="message media-body">
                                    <span className="name float-left">Jack Sanders</span>
                                    <span className="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                                    </NavLink>
                                    <NavLink className="dropdown-item media bg-flat-color-5" to="#">
                                                <span className="photo media-left"><img alt="avatar"
                                                                                        src="images/avatar/3.jpg"/></span>
                                        <span className="message media-body">
                                    <span className="name float-left">Cheryl Wheeler</span>
                                    <span className="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                                    </NavLink>
                                    <NavLink className="dropdown-item media bg-flat-color-3" to="#">
                                                <span className="photo media-left"><img alt="avatar"
                                                                                        src="images/avatar/4.jpg"/></span>
                                        <span className="message media-body">
                                    <span className="name float-left">Rachel Santos</span>
                                    <span className="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-5">
                        <div className="user-area dropdown float-right">
                            <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                     aria-expanded="false">

                                { username && (<img className="user-avatar rounded-circle" src={config.apiUrl+"/uploads/"+username.phone+"/"+username.avatarLink}
                                                alt={username.fullName}/>)}

                            </NavLink>

                            <div className="user-menu dropdown-menu">
                                <NavLink className="nav-NavLink" to="#"><i className="fa fa- user"></i>My
                                    Profile</NavLink>

                                <NavLink className="nav-NavLink" to="#"><i
                                    className="fa fa- user"></i>Notifications <span
                                    className="count">13</span></NavLink>

                                <NavLink className="nav-NavLink" to="#"><i className="fa fa -cog"></i>Settings</NavLink>

                                <NavLink className="nav-NavLink" to='/page-login.html'><i className="fa fa -cog"></i>Logout
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.userReducers
    };
};

export default connect(mapStateToProps)(Header);
