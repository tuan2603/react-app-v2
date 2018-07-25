import React, {Component} from 'react';
import Logo from '../../assets/img/logo.png';
import {connect} from 'react-redux';
import {alogin,alogout} from '../../actions/userActions';
import {show_notification} from '../../actions/notifyActions';
import {TOKEN} from '../../constants/Users';
import {login, history } from '../../helpers';
import autoBind from 'react-autobind';
import { setInSession,removeSession } from '../../utils';

class Login extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(alogout());
        removeSession(TOKEN);

        this.state = {
            username: {
                phone: "",
                password: "",
            },
            submitted: false
        }
        autoBind(this);
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
                if (user.response === true) {
                    dispatch(alogin(user.value));
                    setInSession(TOKEN,user.value);
                    history.push('/');
                    dispatch(show_notification({txt:"Đăng nhập thành công",type:"suc"}));
                } else {
                    dispatch(show_notification({txt:user.value,type:"err"}));
                }
            });
    }

    render() {
        const { username, submitted, password } = this.state;
        const { loggingIn } = this.props;
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
                                <div className={"form-group" + (submitted && !username ? ' has-error' : '')}>
                                    <label>Số điện thoại</label>
                                    <input type="email"
                                           className="form-control"
                                           placeholder="phone"
                                           onChange={this.phoneHandle}
                                    />
                                    {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label>Mật khẩu</label>
                                    <input type="password"
                                           className="form-control"
                                           placeholder="password"
                                           onChange={this.passwordHandle}
                                    />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <button type="submit"
                                        className="btn btn-success btn-flat m-b-30 m-t-30"
                                        onClick={this.handleSubmit}
                                >
                                    Đăng nhập
                                </button>
                                {loggingIn &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="  alt={"login"}/>
                                }
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
        loggingIn: state.userReducers,
        notification: state.notifyReducers
    };
};
const connectedApp = connect(mapStateToProps)(Login);
export {connectedApp as Login};
