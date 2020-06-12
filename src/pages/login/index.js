import React from 'react'

export default function Login() {
    return (
        <div class="columns is-centered">
            <form className="column is-half">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Cat's name" />
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

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" value="" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-success">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-success is-light">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
