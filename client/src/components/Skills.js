import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

class Skills extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        let previewClassGrid='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'; previewClassGrid="grid-preview-layout"}
        return(
            <div className={`grid-layout ${previewClassGrid}`}>
                <div className={`${previewClass}`}>
                    <Navigation />
                    <h1  className={`${previewClass}`}>Skills Section</h1>
                </div>
                <div className="render-section print-width">
                    
                    <h2 className='text-underline'>Skills</h2>
                    <ul className="d-flex flex-start flex-wrap  mt-2">
                        {this.props.data.skills.map((skill, index) => {
                                return(
                                    skill !== '' ?
                                    <li key={`institue-output-${index}`} className="li-inside mr-2">
                                        {skill}
                                    </li> :
                                    <span key={`institue-output-${index}`}></span>
                                )
                        })}
                    </ul>
                </div>
                <div className={`input-section ${previewClass}`}>
                    <div className='input-container'>
                        <div className="grid-1-col mb-2">
                            {this.props.data.skills.map((skill, index) => {
                                        return(
                                            <div key={`institue-${index}`} className="mb-2">
                                                <input type="text" placeholder="skill..." onChange={this.props.callback} value={skill} id={`skillInfo-skills-${index}-input`}/> 
                                            </div>
                                        )
                            })}
                        </div>
                        <button type="button"  id="skillInfo-skills-btn" onClick={this.props.newField} className="btn callout-btn">Add skill</button>
                        <div className={`btn-group ${previewClass}`}>
                            <Link to="/projects" className='btn prev'>Previous Section</Link>
                            <Link to="/references" className='btn next'>Next Section</Link>
                        </div>
                    </div>
                
                </div>
                <Footer />
            </div>
        )
    }
}

export default Skills;