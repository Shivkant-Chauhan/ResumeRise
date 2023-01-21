import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

class Career extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        let previewClassGrid='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'; previewClassGrid="grid-preview-layout"}
        return(
            <div className={`grid-layout ${previewClassGrid}`}>
                <div className={`${previewClass}`}>
                    <Navigation />
                    <h1  className={`${previewClass}`}>Career Section</h1>
                </div>

                <div className="render-section print-width">
                    <h2 className='text-underline'>Career</h2>
                    {this.props.data.career.map((car, index) => {

                            let dateRange =''; 
                            if(car.from !== '' && car.to !== '') {
                                dateRange = car.from + " - " + car.to
                            } else if (car.from !== '') {
                                dateRange = car.from + " - present";   
                            } 

                            return(
                                car.title !== '' ?
                                <div key={`institue-${index}`} className="grid-2-col grid-gap-r1 mb-2 mt-2">
                                    <div>
                                        <h3>{car.title}</h3>
                                        <p>{car.company}</p>
                                    </div>
                                    <div className='align-right'>
                                        <p>{dateRange}</p>
                                    </div>
                                    <div className='grid-span-2'>{car.overview}</div>
                                </div>
                                : <span key={`institue-${index}`}></span>

                            )
                    })}

                </div>
                <div className={`input-section ${previewClass}`}>
                    
                    <div className='input-container'>
                        {this.props.data.career.map((car, index) => {
                                return(
                                    <div key={`institue-${index}`}>
                                        <div className='grid-2-col mb-2'>
                                            <input type="text" placeholder="Job Title" value={car.title} onChange={this.props.callback} id={`careerInfo-career-${index}-title-input`}/>
                                            <input type="text" placeholder="Company" value={car.company} onChange={this.props.callback} id={`careerInfo-career-${index}-company-input`}/>
                                        </div>
                                        <div className='grid-2-col mb-2'>
                                            <input type="text" placeholder="From:" value={car.from} onChange={this.props.callback} id={`careerInfo-career-${index}-from-input`}/>
                                            <input type="text" placeholder="To:" value={car.to} onChange={this.props.callback} id={`careerInfo-career-${index}-to-input`}/>
                                        </div>
                                        
                                        <div className='grid-1-col mb-2'>
                                            <textarea placeholder="Career overview" value={car.overview} onChange={this.props.callback} id={`careerInfo-career-${index}-overview-input`}/>
                                        </div>
                                    </div>
                                )
                        })}
                        <button type="button"  id="careerInfo-career-btn" onClick={this.props.newField} className="btn callout-btn">Add Job</button>
                        <div className={`btn-group ${previewClass}`}>
                            <Link to="/education" className='btn prev'>Previous Section</Link>
                            <Link to="/projects" className='btn next'>Next Section</Link>
                        </div>

                    </div>
                </div>
                <Footer />

                
            </div>
        )
    }
}

export default Career;