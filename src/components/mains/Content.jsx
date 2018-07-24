import React from 'react';
import Alert from './Alert';
import MemberOnline from './MemberOnlineChart';
import Socials from './Socials';

class Content extends React.Component {
    render() {
        return (
            <div className="content mt-3">
                < Alert/>
                <MemberOnline bg={'bg-flat-color-1'}/>
                <MemberOnline bg={'bg-flat-color-2'}/>
                <MemberOnline bg={'bg-flat-color-3'}/>
                <MemberOnline bg={'bg-flat-color-4'}/>
                <Socials map={0} icon={"fa-facebook"} social={"facebook"}/>
                <Socials map={1} icon={"fa-twitter"} social={"twitter"}/>
                <Socials map={2} icon={"fa-linkedin"} social={"linkedin"}/>
                <Socials map={3} icon={"fa-google-plus"} social={"google-plus"}/>
            </div>
        );
    }
}


export default Content;
