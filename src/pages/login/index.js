import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
// import md5 from 'md5';
import { setUser } from '../../actions/userActions'
import { connect } from 'react-redux';
import { PROTOCOL, HOST, PORT } from '../../backend-config';

export function Login(props) {
    const [username, setUsername] = useState("cat1");
    const [password, setPassword] = useState("cat1");
    const [validPassword, setValidationPassword] = useState(true);
    const [validUsername, setValidationUsername] = useState(true);
    const history = useHistory();

    function isValidPassword() {
        if (password.length >= 3) {
            setValidationPassword(true);
            return true;
        }
        setValidationPassword(false);
        return false;
    }

    function isValidUsername() {
        if (username.length > 0) {
            setValidationUsername(true);
            return true;
        }
        setValidationUsername(false);
        return false;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (isValidUsername() & isValidPassword()) {
            const result = (await axios.get(`${PROTOCOL}://${HOST}:${PORT}/cats/`)).data;
            if (result.error) {
                throw new Error(result.message);
            }

            const cat = result.data.find(cat => cat.username === username && cat.password === password);

            if (!cat) {
                throw new Error('Cat is not found!');
            }

            props.setUser(cat);
            history.push('/profile');
        }
    }

    return (
        <div className="columns is-centered">
            <form className="column is-half" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Login" value={username} onChange={e => setUsername(e.target.value)} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    {!validUsername && <p class="help is-danger">This username is invalid</p>}
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                    {!validPassword && <p class="help is-danger">This password is invalid</p>}
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <Link className="button is-success is-light" to="/signup">Sign up</Link>
                    </div>
                    <div className="control">
                        <button className="button is-success">Enter</button>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default connect(null, { setUser })(Login);