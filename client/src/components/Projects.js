import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

class Projects extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        let previewClassGrid='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'; previewClassGrid="grid-preview-layout"}
        console.log(previewClass);
        return(
            
            <div className={`grid-layout ${previewClassGrid}`}>
                <div className={`${previewClass} nav-section`}>
                    <Navigation></Navigation>
                    <h1 className={`${previewClass}`} >Project Section</h1>
                </div>

                <div className="render-section print-width">
                    <h2 className='text-underline'>Projects</h2>
                        {this.props.data.project.map((proj, index) => {
                                return(
                                    proj.name !== '' ?
                                    <div key={`project-${index}`} className="grid-1-col grid-gap-r1 mt-3">
                                        <div className='grid-2-col'>
                                            <h3>{proj.name}</h3>
                                            <a href={`https://${proj.link}`} className="align-right">{proj.link}</a>
                                        </div>
                                        <p className="align-left">{proj.overview}</p>
                                    </div> 
                                    : <span key={`project-${index}`}></span>
                                )
                        })}
                    {/* <hr  className={`${previewClass}`}/> */}
                </div>
                


                <div className={`input-section ${previewClass}`}>
                    <div className='input-container'>
                    {this.props.data.project.map((proj, index) => {
                                return(
                                    <div key={`project-${index}`} className="grid-1-col grid-gap-r1 mt-3">
                                        <div className='grid-2-col'>
                                            <input type="text" placeholder="project name..." onChange={this.props.callback} value={proj.name} id={`projectInfo-project-${index}-name-input`}/> 
                                            <input type="text" placeholder="project link (don't add https://)" onChange={this.props.callback} value={proj.link} id={`projectInfo-project-${index}-link-input`}/> 
                                        </div>
                                        <textarea placeholder="project overview" onChange={this.props.callback} value={proj.overview} id={`projectInfo-project-${index}-overview-input`}/> 
                                    </div>
                                )
                    })}
                    <button type="button"  id="projectInfo-project-btn" onClick={this.props.newField} className="mt-2 btn callout-btn">Add project</button>
                    <div className={`btn-group ${previewClass}`}>
                        <Link to="/career" className='btn prev'>Previous Section</Link>
                        <Link to="/skills" className='btn next'>Next Section</Link>
                    </div>
                    </div>
                </div>



                
                
                <Footer />
            </div>
        )
    }
}

export default Projects;