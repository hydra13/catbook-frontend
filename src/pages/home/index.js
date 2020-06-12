import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container has-text-centered">
            <h1 className="title">
                CatBook
            </h1>
            <h2 className="subtitle">
                Social network for cats
            </h2>

            <div className="field is-grouped is-grouped-centered">
                <p class="control">
                    <Link className="button is-success" to="/signup">Sign up</Link>
                </p>
                <p class="control">
                    <Link className="button is-success is-light" to="/login">Log in</Link>
                </p>
            </div>

        </div>
    )
}
