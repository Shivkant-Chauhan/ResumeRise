import React, { Component } from "react";
import {Link} from "react-router-dom"; 


class NotFound extends Component {

    render() {
        return (
            <div>
                <div  className="grid-1-col grid-gap-r1 mb-5">
                    <h1>ERROR!!!!</h1>
                    <p>Page not found</p>
                </div>
            </div>
        )
    }
}

export default NotFound;