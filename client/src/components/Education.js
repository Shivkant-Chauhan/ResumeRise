import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

class Education extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        let previewClassGrid='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'; previewClassGrid="grid-preview-layout"}

        return(
            <div className={`grid-layout ${previewClassGrid}`}>
                <div className={`${previewClass}`}>
                    <Navigation />
                    <h1  className={`${previewClass}`}>Education Section</h1>
                </div>

                <div className="render-section print-width">
                    <h2 className='text-underline'>Education</h2>
                        {this.props.data.institute.map((ins, index) => {

                            let subjectGrade =''; 
                            if(ins.areaStudy !== '' && ins.grade !== '') {
                                subjectGrade = ins.areaStudy + " - " + ins.grade
                            } else if (ins.areaStudy !== '') {
                                subjectGrade = ins.areaStudy; 
                            } else {
                                subjectGrade = ins.grade;
                            }

                            let dateRange =''; 
                            if(ins.from !== '' && ins.to !== '') {
                                dateRange = ins.from + " - " + ins.to
                            } else if (ins.from !== '') {
                                dateRange = ins.from + " - present";   
                            } 

                            return(
                                ins.school !== '' ?
                            <div key={`institue-output-${index}`} className="mt-3">
                                <div className='grid-2-col'>
                                    <h3>{ins.school}</h3>
                                    <p className='align-right'>{dateRange}</p>
                                    <p>{subjectGrade}</p>
                                </div>
                                <div className='grid-1-col mt-2'>{ins.overview}</div>
                            </div>
                            : <span key={`institue-output-${index}`}></span>
                            )
                        })}
                </div>
                <div className={`input-section ${previewClass}`}>
                    <div className='input-container'>
                        {this.props.data.institute.map((ins, index) => {
                            return(
                                <div key={`institue-${index}`} className="grid-1-col grid-gap-r1 mb-3">
                                    <div className='grid-3-col'>
                                        <input type="text" placeholder="Institute" value={ins.school} onChange={this.props.callback} id={`educationInfo-institute-${index}-school-input`}/>
                                        <input type="text" placeholder="From:" value={ins.from} onChange={this.props.callback} id={`educationInfo-institute-${index}-from-input`}/>
                                        <input type="text" placeholder="To:" value={ins.to} onChange={this.props.callback} id={`educationInfo-institute-${index}-to-input`}/>

                                    </div>
                                    <div className='grid-3-col'>
                                        <input type="text" placeholder="Subject" value={ins.areaStudy} onChange={this.props.callback} id={`educationInfo-institute-${index}-areaStudy-input`}/>
                                        <input type="text" placeholder="Grade" value={ins.grade} onChange={this.props.callback} id={`educationInfo-institute-${index}-grade-input`}/>
                                    </div>
                                    <textarea placeholder="Course overview" value={ins.overview} onChange={this.props.callback} id={`educationInfo-institute-${index}-overview-input`}/>
                                </div>
                            )
                        })}
                        <button type="button"  id="educationInfo-institute-btn" onClick={this.props.newField} className="btn callout-btn">Add Education</button>

                        <div className={`btn-group ${previewClass}`}>
                            <Link to="/personalInfo" className='btn prev'>Previous Section</Link>
                            <Link to="/career" className='btn next'>Next Section</Link>
                        </div>

                    </div>
                </div>
                <Footer />

                

            </div>
        )
    }
}

export default Education;