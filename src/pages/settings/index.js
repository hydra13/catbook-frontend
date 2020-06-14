import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { setUser } from '../../actions/userActions';

function Settings(props) {
    const [name, setName] = useState(props.user ? props.user.name : '');
    const [email, setEmail] = useState(props.user ? props.user.email : '');
    const [password, setPassword] = useState(props.user ? props.user.password : '');
    if (!props.user) {
        return (<Redirect to="/login" />)
    }

    const saveChanges = async (event) => {
        event.preventDefault();
        try {
            const newUser = {
                username: props.user.username,
                name,
                email,
                password
            }
            console.log(`newUser: ${JSON.stringify(newUser)}`)
            const result = (await axios.put(`http://localhost:7713/cats/${props.user.id}`, newUser)).data;
            if (result.error) {
                console.log(result.message);
                return;
            }
            props.setUser({ ...props.user, ...newUser });
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="columns is-centered">

            <div className="column h13-centered">
                <figure className="image is-128x128 box">
                    <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="Avatar" />
                </figure>
            </div>

            <form className="column" onSubmit={(event) => saveChanges(event)}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Username" value={props.user.username} readOnly />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
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

function mapStateToProps(state) {
    return { user: state.user.user }
}

export default connect(mapStateToProps, { setUser })(Settings);
