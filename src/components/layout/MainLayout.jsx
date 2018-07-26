import React from 'react';
import {SidebarLeft, Breadcrumbs, Header } from '../index';


class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <main className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
                <SidebarLeft />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs />
                   { children }
                </div>
            </main>
        );
    }
}

export default MainLayout;
