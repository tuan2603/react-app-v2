import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import {connect} from 'react-redux';
import {alogin, alogout} from '../../actions/userActions';
import {show_notification} from '../../actions/notifyActions';
import {TOKEN} from '../../constants/Users';
import {login} from '../../helpers';
import autoBind from 'react-autobind';
import {setInSession, removeSession, getFromSession} from '../../utils';

class Login extends Component {
    constructor(props) {
        super(props);
        // reset login status
        this.state = {
            username: {
                phone: "",
                password: "",
            },
            submitted: false,
            redirectToReferrer: false,
        }
        autoBind(this);
    }

    componentDidMount() {
        if (getFromSession(TOKEN) != null) {
            this.props.dispatch(alogout());
            removeSession(TOKEN);
        }
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
                    dispatch(alogin({token: user.value}));
                    setInSession(TOKEN, user.value);
                    dispatch(show_notification({txt: "Đăng nhập thành công", type: "suc"}));
                    this.setState({redirectToReferrer: true});
                } else {
                    dispatch(show_notification({txt: "Tên hoặc mật khẩu không đúng", type: "err"}));
                }
            });
    }

    render() {
        const {username, submitted, password, redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: "/"}};

        if (redirectToReferrer) {
            return <Redirect to={from}/>;
        }
        return (

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
                        </form>
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

export default connect(mapStateToProps)(Login);
