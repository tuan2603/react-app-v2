import React from 'react';
import {connect} from 'react-redux';
import {Alert,MemberOnlineChart,Socials} from '../mains';

class Content extends React.Component {
    render() {
        return (
            <div className="content mt-3">
                < Alert/>
                <MemberOnlineChart bg={'bg-flat-color-1'}/>
                <MemberOnlineChart bg={'bg-flat-color-2'}/>
                <MemberOnlineChart bg={'bg-flat-color-3'}/>
                <MemberOnlineChart bg={'bg-flat-color-4'}/>
                <Socials map={0} icon={"fa-facebook"} social={"facebook"}/>
                <Socials map={1} icon={"fa-twitter"} social={"twitter"}/>
                <Socials map={2} icon={"fa-linkedin"} social={"linkedin"}/>
                <Socials map={3} icon={"fa-google-plus"} social={"google-plus"}/>
            </div>
        );
    }
}

const connectedApp = connect()(Content);
export {connectedApp as Content};

