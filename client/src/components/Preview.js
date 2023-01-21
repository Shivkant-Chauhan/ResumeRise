import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Career from './Career';
import Skills from './Skills';
import References from './References';
import Projects from './Projects';


class Preview extends Component {

    constructor() {
        super(); 
        this.printCV = this.printCV.bind(this);
    }

    printCV( ) {
        window.print();
    }

    render() {
        return(
            <div>
                <div className='print-hide'>
                    <Navigation />
                    <h2>Preview</h2>
                </div>

                <div className="render-section print-width">
                    <PersonalInfo data={this.props.data.personalInfo} callback={this.props.callback} newField={this.props.newField} />
                    <Education data={this.props.data.educationInfo} callback={this.props.callback} newField={this.props.newField}/>
                    <Career data={this.props.data.careerInfo} callback={this.props.callback} newField={this.props.newField}/>
                    <Projects data={this.props.data.projectInfo} callback={this.props.callback} newField={this.props.newField}/>
                    <Skills data={this.props.data.skillInfo} callback={this.props.callback} newField={this.props.newField}/>
                    <References data={this.props.data.referenceInfo} callback={this.props.callback} newField={this.props.newField}/>
                </div>

                <div className="btn-group print-hide">
                    <Link to="/references" className='btn prev'>Previous Section</Link>
                    <button type="button" className='btn callout-btn' onClick={this.printCV}>Print</button>
                    <Link to="/" className='btn next'>Home</Link>
                </div>
            </div>
        )
    }
}

export default Preview;