import React, { Component } from "react";
import {Link} from "react-router-dom"; 


class NotFound extends Component {

    render() {
        return (
            <div>
                <div  className="grid-1-col grid-gap-r1 mb-5">
                    <h1>Oh No! Page not found!</h1>
                    <p>Sorry about that - something seems to have gone wrong.</p>
                    <p>Please go back to the home page using the link below.</p>
                </div>
                <Link to="/" className="btn mt-5">Home</Link>
            </div>
        )
    }
}

export default NotFound;