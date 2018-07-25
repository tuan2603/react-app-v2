import React, {Component} from 'react';
import Logo from '../../assets/img/logo.png';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import {show_notification} from '../../actions/notifyActions';
import {TOKEN} from '../../constants/Users';
import {login, history} from '../../helpers';
import autoBind from 'react-autobind';
import { setInSession,removeSession } from '../../utils';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: {
                phone: "",
                password: "",
            },
            submitted: false
        }

        autoBind(this);
    }

    componentWillUnmount() {
        removeSession(TOKEN);
    }

    phoneHandle(e) {
        let {username} = this.state;
        username.phone = e.target.value;
        this.setState({username});
    }

    passwordHandle(e) {
        let {username} = this.state;
        username.password = e.target.value;
        this.setState({username});
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state.username);
        this.setState({submitted: true});
        const {dispatch} = this.props;
        let {phone, password} = this.state.username;
        login(phone, password)
            .then(user => {
                console.log(user.value);
                if (user.response === true) {
                    dispatch(userActions.login(user.value));
                    setInSession(TOKEN,user.value);
                    history.push('/');
                } else {
                    dispatch(show_notification("dang nhap sai ten hoac mat khau"));
                }
            });

    }

    render() {

        return (
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="/">
                                <img className="align-content" src={Logo} width={200} alt=""/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="email"
                                           className="form-control"
                                           placeholder="phone"
                                           onChange={this.phoneHandle}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password"
                                           className="form-control"
                                           placeholder="password"
                                           onChange={this.passwordHandle}
                                    />
                                </div>
                                <button type="submit"
                                        className="btn btn-success btn-flat m-b-30 m-t-30"
                                        onClick={this.handleSubmit}
                                >
                                    Đăng nhập
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        menu: state.userReducers
    };
};
const connectedApp = connect(mapStateToProps)(Login);
export {connectedApp as Login};
