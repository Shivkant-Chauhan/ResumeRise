import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

class References extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        let previewClassGrid='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'; previewClassGrid="grid-preview-layout"}
        return(
            <div className={`grid-layout ${previewClassGrid}`}>
                <div className={`${previewClass}`}>
                    <Navigation />
                    <h1 className={`${previewClass}`}>Reference Section</h1>
                </div>

                <div className="render-section print-width">
                    <h2 className='text-underline'>References</h2>
                    <div className='mt-2 d-flex flex-wrap d-space-between grid-gap-r1'>
                        {this.props.data.reference.map((ref, index) => {
                                let contactInfo = '';
                                if(ref.email !== '' && ref.phone !== ''){
                                    contactInfo = ref.email + " \u2014 " + ref.phone;
                                } else if (ref.email !== '') {
                                    contactInfo = ref.email;
                                } else if (ref.phone !== ''){
                                    contactInfo = ref.phone 
                                }
                                    return(
                                        <div key={`reference-output-${index}`}
                                        >
                                            <h3>{ref.name}</h3>
                                            <p>{contactInfo}</p>
                                        </div>
                                    )
                            })}
                    </div>
                    
                </div>
                <div className={`input-section ${previewClass}`}>
                    <div className='input-container'>
                        {this.props.data.reference.map((ref, index) => {
                            return(
                                <div key={`reference-${index}`} className="grid-3-col mb-2">
                                    <input type="text" placeholder="Name" onChange={this.props.callback} value={ref.name} id={`referenceInfo-reference-${index}-name-input`}/> 
                                    <input type="email" placeholder="Email" onChange={this.props.callback} value={ref.email} id={`referenceInfo-reference-${index}-email-input`}/> 
                                    <input type="email" placeholder="Phone" onChange={this.props.callback} value={ref.phone} id={`referenceInfo-reference-${index}-phone-input`}/> 
                                </div>
                            )
                        })}
                        <button type="button"  id="referenceInfo-reference-btn" onClick={this.props.newField} className="btn callout-btn">Add Reference</button>

                        <div className={`btn-group ${previewClass}`}>
                            <Link to="/skills" className='btn prev'>Previous Section</Link>
                            <Link to="/preview" className='btn next'>Next Section</Link>
                        </div>
                    </div>
                
                </div>
                <Footer />
            </div>
        )
    }
}

export default References;