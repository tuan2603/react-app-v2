import React from 'react';
import {SidebarLeft, Breadcrumbs, Header } from '../mains';
import {CategoryDetail } from '../categories';


class Category extends React.Component {
    render() {
        return (
            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
                <SidebarLeft />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs />
                    <CategoryDetail />
                </div>
            </div>
        );
    }
}

const connectedApp = (Category);
export { connectedApp as Category };