import React, {Component} from "react"; 
import { NavLink } from "react-router-dom";

class Navigation extends Component {


    render() {
        return(
            <div className="mt-2 mb-2 print-hide">
                <ul className="nav">
                    <li title="Home" className="nav-item"><NavLink to="/"  className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    <li title="Personal Info" className="nav-item"><NavLink to="/personalInfo" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    <li title="Education" className="nav-item"><NavLink to="/education" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    <li title="Career" className="nav-item"><NavLink to="/career" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    <li title="Projects" className="nav-item"><NavLink to="/projects" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    <li title="Skills" className="nav-item"><NavLink to="/skills" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    <li title="References" className="nav-item"><NavLink to="/references" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                    {/* <li title="Document Styles" className="nav-item"><NavLink to="/documentStyle" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li> */}
                    <li title="Preview" className="nav-item"><NavLink to="/preview" className={({isActive}) => isActive? "nav-link active" : "nav-link"}/></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;