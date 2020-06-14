import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Profile(props) {
    if (!props.user) {
        return (<Redirect to="/login" />)
    }
    const { name } = props.user;
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <div className="column h13-centered">
                            <figure className="image is-128x128 box">
                                <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="Avatar" />
                            </figure>
                        </div>
                        <p className="title">{name}</p>
                        <p className="subtitle">Status of this cat</p>
                        <div className="content">
                            Date of last visit
                        </div>
                    </div>
                </article>
                <div className="tile is-child"></div>
            </div>
            <div className="tile is-vertical is-10">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-light">
                        <p className="title">News</p>
                        <div className="content tile is-parent is-vertical">
                            {/* This is emply right now */}
                            <div className="tile is-child card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">CoolCat</p>
                                            <p className="subtitle is-6">@coolcat</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                        <br />
                                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    </div>
                                </div>
                            </div>

                            <div className="tile is-child card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">PrettyKitty</p>
                                            <p className="subtitle is-6">@kitty234</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                        <br />
                                        <time dateTime="2016-1-1">11:32 PM - 1 Jan 2018</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return { user: state.user.user }
}

export default connect(mapStateToProps)(Profile);
