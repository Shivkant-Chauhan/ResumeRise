import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

class PersonalInfo extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        let previewClassGrid='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'; previewClassGrid="grid-preview-layout"}

        return(
           <div  className={`grid-layout ${previewClassGrid}`}>
                <div className={`${previewClass}`}>
                    <Navigation />
                    <h1  className={`${previewClass}`}>Personal Information Section</h1>
                </div>

                <div className="render-section grid-2-col grid-gap-r1 print-width print-padding">
                    <div>
                        <h1>{this.props.data.name}</h1>
                        <p>{this.props.data.email}</p>
                        <p>{this.props.data.phone}</p>
                    </div>
                    <div>
                    <ul>
                    {this.props.data.websites.map((site, index) => {
                        
                        return(
                            site !== '' ?
                            <li key={`website-line-${index}`} className="align-right li-style-none"><a href={`https://${site}`} target="_blank" rel="noreferrer">{site}</a></li> :
                            <div key={`website-line-${index}`}></div>
                        )
                    })}
                    </ul>
                    </div>
                    <div className="grid-span-2">
                        <hr />
                        <h2 className='mt-2 text-underline'>About</h2>
                        <p className=' mt-2'>{this.props.data.about}</p>
                    </div>

                </div>

                <div className={`input-section ${previewClass}`}>
                    <div className='input-container'>
                        <div className="grid-3-col">
                            <input type='text' value={this.props.data.name} onChange={this.props.callback} id="personalInfo-name-input" placeholder="Name" autoComplete='off'/>
                            <input type='email' value={this.props.data.email} onChange={this.props.callback} id="personalInfo-email-input" placeholder="Email" autoComplete='off'/>
                            <input type='text' value={this.props.data.phone} onChange={this.props.callback} id="personalInfo-phone-input" placeholder="Phone" autoComplete='off'/>
                        </div>
                        <div className="grid-3-col mt-2 mb-2 grid-gap-r1">
                            {this.props.data.websites.map((site, index) => {
                                return(
                                <input type='text' value={site} key={`website-${index}`} onChange={this.props.callback} id={`personalInfo-websites-${index}-input`} placeholder="website" autoComplete='off'/>
                                )
                            })}
                        </div>
                        <button type="button"  id="personalInfo-websites-btn" onClick={this.props.newField} className="btn callout-btn">Add Website</button>
                        <div className='grid-1-col mt-2'>
                            <textarea placeholder="About text..." id="personalInfo-about-input" value={this.props.data.about} onChange={this.props.callback}></textarea>
                        </div>
                        <div className={`btn-group ${previewClass}`}>
                            <Link to="/" className='btn prev'>Previous Section</Link>
                            <Link to="/education" className='btn next'>Next Section</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PersonalInfo;