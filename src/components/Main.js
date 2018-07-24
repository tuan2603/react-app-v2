import React from 'react';
import SidebarLeft from './SidebarLeft';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import Content from './Content';


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

export default Main;
