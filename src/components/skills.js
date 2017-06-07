import React, {Component} from 'react';

class Skills extends Component{

  render(){
    
    return (
      <div className="skillsDiv">
        <hr />
        <h1 className="skillsTitle">Skills</h1>
        <div>
          <i className="fa fa-html5 techIcon" aria-hidden="true"></i>
          <i className="icon-css3-alt languagesIcon"></i>
          <i className="icon-javascript-alt languagesIcon"></i>
          <i className="icon-reactjs languagesIcon"></i>
          <i className="icon-nodejs languagesIcon"></i>
          <i className="icon-mongodb languagesIcon"></i>
        </div>
      </div>
    )
  }
}

export default Skills;
