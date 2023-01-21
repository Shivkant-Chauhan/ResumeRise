import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/Footer.css';
import './styles/Helper.css';
import './styles/mediaQueries.css';
import Login from './components/Login/Login';

import Home from './components/Home';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Career from './components/Career';
import Skills from './components/Skills';
import References from './components/References';
import Projects from './components/Projects';
// import DocumentStyle from './Components/DocumentStyle';
import Preview from './components/Preview';
import NotFound from './components/NotFound';
import { useStore } from 'zustand';


class App extends React.Component {

  constructor() {
    super(); 

    this.state = {
      personalInfo: {
        name: '', 
        email: '',
        phone: '', 
        websites: [''],
        about: ''
      },
      educationInfo: {
        institute: [{
          school: '',
          from: '',
          to: '',
          grade: '',
          areaStudy: '',
          overview: ''
        }]
      }, 
      careerInfo: {
        career: [{
          title: '',
          company: '',
          from: '',
          to:'',
          overview: ''
        }]
      }, 

      projectInfo: {
        project: [{
          name: '',
          link: '',
          overview: ''
        }]
      }, 
      skillInfo: {
        skills:['']
      }, 
      referenceInfo: {
        reference:[{
          name: '',
          email: '',
          phone: ''
        }]
      }
    }

    this.updateInfo = this.updateInfo.bind(this); 
    this.addRecord = this.addRecord.bind(this);

  }

  updateInfo( e ) {
    let targetStateArea = e.target.id.split('-')[0]; 
      let targetStateField = e.target.id.split('-')[1]; 

      let currState = this.state[targetStateArea];
      if (Array.isArray(currState[targetStateField])) {
        let arrIndex = e.target.id.split('-')[2];

        if (e.target.id.split('-')[3] !== 'input' && e.target.id.split('-')[3] !== 'btn') {
          let inputSec = e.target.id.split('-')[3]; 
          currState[targetStateField][arrIndex][inputSec] = e.target.value;
        } else {
          currState[targetStateField][arrIndex] = e.target.value;
        }
      } else {
        currState[targetStateField] = e.target.value;
      }
      
      this.setState({
          [targetStateArea]: currState
      })
  }


  addRecord( e ) {
    let targetStateArea = e.target.id.split('-')[0]; 
    let targetStateField = e.target.id.split('-')[1]; 
    let currState = this.state[targetStateArea];

    let count = currState[targetStateField];
    let newRecord;

    if (typeof count[0] === 'object') {
      newRecord = {...count[0]};
      for(let item in newRecord) {
        newRecord[item] = ''
  
      }
    } else {
      newRecord = '';
    }
    

    count.push(newRecord);
    currState[targetStateField] = count;
    this.setState({
      [targetStateArea]: currState
    })
  }


  render() {
    // if (isUserAuthenticated) {
      return (
        <div className="App">
          <HashRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/resume' element={<Home />} />
              <Route path='/personalInfo' element={<PersonalInfo data={this.state.personalInfo} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='/education' element={<Education data={this.state.educationInfo} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='/career' element={<Career data={this.state.careerInfo} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='/projects' element={<Projects data={this.state.projectInfo} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='/skills' element={<Skills data={this.state.skillInfo} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='/references' element={<References data={this.state.referenceInfo} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='/preview' element={<Preview data={this.state} callback={this.updateInfo} newField={this.addRecord}/>} />
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </HashRouter>
          
        </div>
      );
    // } else {
      // return (
      //   <div className="App">
      //     <HashRouter>
      //         <Routes>
      //           <Route path='/' element={<Login />} />
      //         </Routes>
      //       </HashRouter>
      //   </div>
      // );
    // }
  }

  
}

export default App;
