import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Home extends Component {


    render() {
        return(
            <div>
                <div>
                    <Navigation />
                    <h1>Welcome to The Odin Project CV Builder</h1>
                </div>
                <div className="grid-1-col mb-5 mt-5">
                    <p>This cv builder uses react router dom to navigate between different sections.</p>
                    <p>Please click the link below to get started.</p>
                </div>
                <Link to="/personalInfo" className='btn next'>Personal Information</Link>
            </div>
        )
    }
}

export default Home;