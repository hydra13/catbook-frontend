import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item is-size-3" to="/"><b>CatBook</b></Link>
                    {/* <Link className="navbar-item is-size-3" to="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="CatBook" width="100" height="100" />
                    </Link> */}

                    <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainHavBar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="mainHavBar" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/profile">Profile</Link>
                        <Link className="navbar-item" to="/settings">Settings</Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* <Link className="button is-success" to="/signup">Sign up</Link> */}
                                <Link className="button is-success" to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
