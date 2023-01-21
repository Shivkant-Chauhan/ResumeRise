import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class DocumentStyle extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Document styles</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/AOB">Previous Section</Link>
                    <Link to="/preview">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default DocumentStyle;