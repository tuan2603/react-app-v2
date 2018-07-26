import React, {Component} from 'react';
import {SidebarLeft, Breadcrumbs, Header} from '../index';
import {TOKEN} from "../../constants/Users";
import {getFromSession} from "../../utils";
import autoBind from "react-autobind";
import {Redirect} from 'react-router-dom';

class MainLayout extends Component {
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
        }
    }
    render() {
        const {children} = this.props;
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={`page-login.html`}/>
        }
        return (
            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
                <SidebarLeft/>
                <div id="right-panel" className="right-panel">
                    <Header/>
                    <Breadcrumbs/>
                    {children}
                </div>
            </div>
        );
    }
}

export default MainLayout;
