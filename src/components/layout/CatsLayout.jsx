import React, {Component} from 'react';
import {Categories} from '../categories';
import {SidebarLeft, Header} from '../index';
import {TOKEN} from "../../constants/Users";
import {getFromSession} from "../../utils";
import autoBind from "react-autobind";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getInfo} from '../../helpers';
import {alogin} from "../../actions/userActions";
import {show_notification} from "../../actions/notifyActions";
class CatsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
        }
        autoBind(this);
    }
    componentDidMount(){
        if(getFromSession(TOKEN) == null )  {
            this.setState({
                redirectToReferrer: true,
            }) ;
        }else{
            const {dispatch} = this.props;
            getInfo().then(user => {
                if (user.response === true) {
                    dispatch(alogin(user.value));
                } else {
                    dispatch(show_notification({txt: "Tên hoặc mật khẩu không đúng", type: "err"}));
                }
            });

        }
    }
    render() {
        const {children} = this.props;
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={`page-login.html`}/>
        }
        return (
            <div > <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
                <SidebarLeft/>
                <div id="right-panel" className="right-panel" style={{width:"100%"}}>
                    <Header/>
                    <Categories>{children}</Categories>
                </div>
            </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        loggingIn: state.userReducers
    };
};

export default connect(mapStateToProps)(CatsLayout);