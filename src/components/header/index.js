import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { resetUser } from '../../actions/userActions'
import { connect } from 'react-redux';

function Header(props) {
    const history = useHistory();

    const logout = () => {
        props.resetUser();
        history.push('/');
    }

    return (
        <>
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item is-size-3" to="/"><b>CatBook</b></Link>
                    {/* <Link className="navbar-item is-size-3" to="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="CatBook" width="100" height="100" />
                    </Link> */}

                    <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainHavBar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div id="mainHavBar" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">Home</Link>
                        {props.user !== null ? <Link className="navbar-item" to="/profile">Profile</Link> : null}
                        {props.user !== null ? <Link className="navbar-item" to="/settings">Settings</Link> : null}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {props.user !== null ?
                                <button className="button is-success" onClick={() => logout()}>Logout</button>
                                :
                                <div className="buttons">
                                    <Link className="button is-success" to="/signup">Sign up</Link>
                                    <Link className="button is-success is-light" to="/login">Log in</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

function mapStateToProps(state) {
    return { user: state.user.user }
}

export default connect(mapStateToProps, { resetUser })(Header);