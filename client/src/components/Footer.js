import React, {Component} from "react";

class Footer extends Component {

    render() {
        const currentLocation = window.location.href;
        let previewClass='';  
        if(currentLocation.indexOf('preview') >= 0){previewClass='hidden'}
        return (
            <footer className={`print-hide ${previewClass}`}>
                <ul>
                    <li><a href="https://www.youtube.com/c/CraigDavisonDev" target="blank"  rel="noreferrer"><i className="fa-brands fa-youtube fa-3x"></i></a></li>
                    <li><a href="https://www.craig-davison.com" target="blank"  rel="noreferrer"><i className="fa-solid fa-globe fa-3x"></i></a></li>
                    <li><a href="https://www.theodinproject.com/" target="blank"  rel="noreferrer"><img src="https://www.theodinproject.com/mstile-310x310.png" alt="TOP" /></a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer;