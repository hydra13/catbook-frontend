import React from 'react'

export default function Settings() {
    return (
        <div className="columns is-centered">

            <div className="column h13-centered">
                <figure className="image is-128x128 box">
                    <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="Avatar" />
                </figure>
            </div>

            <form className="column">
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Login" value="" readOnly />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Login" value="" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Login" value="" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-success">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
