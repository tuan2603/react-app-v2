import React from 'react';
import {SidebarLeft, Header,  Breadcrumbs, Content} from '../mains';
import {connect} from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
                <SidebarLeft />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs />
                    <Content />
                </div>
            </div>
        );
    }
}

const connectedApp = connect()(Main);
export { connectedApp as Main };