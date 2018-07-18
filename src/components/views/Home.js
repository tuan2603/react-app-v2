import React from 'react';
import LeftSidenav from './LeftSidenav';
import Nav from './Nav';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
                    <div className="grid-y grid-padding-x" style={{height: "100%"}}>
                        <br/>
                        <div className="cell shrink">
                            <img className="thumbnail" src="https://placehold.it/550x350"/>
                        </div>
                        <div className="cell auto">
                            <h5>Mike Mikerson</h5>
                            <p>Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia
                                scelerisque
                                tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent
                                taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie
                                augue sit amet leo.</p>
                        </div>
                    </div>
                </div>

                <div className="off-canvas-content" data-off-canvas-content>
                    <div className="title-bar hide-for-large">
                        <div className="title-bar-left">
                            <button className="menu-icon" type="button" data-toggle="my-info"></button>
                            <span className="title-bar-title">Mike Mikerson</span>
                        </div>
                    </div>


                    <div className="callout primary">
                        <article className="grid-container">
                            <div className="">
                                <h1>Hello! This is the portfolio of a very witty person.</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                    luctus urna
                                    sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec
                                    diam eu
                                    diam mattis viverra. Nulla fringilla.</p>
                            </div>
                        </article>
                    </div>


                    <article className="grid-container">
                        <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="https://placehold.it/550x550"/>
                                <h5>My Site</h5>
                            </div>
                        </div>

                        <hr/>

                        <div className="grid-x grid-margin-x">
                            <div className="medium-6 cell">
                                <h3>Contact Me</h3>
                                <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                                    rhoncus ut
                                    eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est
                                    bibendum non
                                    venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
                                    iaculis
                                    porttitor.</p>
                                <ul className="menu">
                                    <li><a href="#">Dribbble</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Yo</a></li>
                                </ul>
                            </div>
                            <div className="medium-6 cell">
                                <label>Name
                                    <input type="text" placeholder="Name"/>
                                </label>
                                <label>Email
                                    <input type="text" placeholder="Email"/>
                                </label>
                                <label>
                                    Message
                                    <textarea placeholder="holla at a designer"></textarea>
                                </label>
                                <input type="submit" className="button expanded" value="Submit"/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Home;
