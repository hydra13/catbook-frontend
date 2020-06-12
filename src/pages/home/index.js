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
            <Link className="button is-success" to="/login">Log in</Link>
        </div>
    )
}
