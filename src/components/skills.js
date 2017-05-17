import React, {Component} from 'react';

class Skills extends Component{

  render(){
    const skillsStyles = {
      marginTop: '10%',
      textAlign:'center',
    }

    const titleStyle = {
      fontSize: '40px',
      color: '#282828',
      marginBottom: '-2%'
    }

    const secondTitleStyle = {
      fontSize: '30px',
      color: '#282828',
      marginBottom: '-2%',
      paddingTop: '25px'
    }

    const codewarsBadgeStyle = {
      paddingTop: '37px',
      width: '400px',
      height: 'auto'
    }

    const techIconsStyle = {
      fontSize: '50px',
      paddingTop: '50px'
    }

    const languagesIconsStyle = {
      paddingLeft: '30px',
      fontSize: '45px',
      paddingTop: '50px'
    }
    return (
      <div style={skillsStyles}>
        <hr />
        <h1 style={titleStyle}>Skills</h1>
        <h2 style={secondTitleStyle}>Technologies</h2>
        <div>
          <i style={techIconsStyle} className="fa fa-html5" aria-hidden="true"></i>
          <i style={languagesIconsStyle} className="icon-css3-alt"></i>
          <i style={languagesIconsStyle} className="icon-javascript-alt"></i>
          <i style={languagesIconsStyle} className="icon-reactjs"></i>
          <i style={languagesIconsStyle} className="icon-nodejs"></i>
          <i style={languagesIconsStyle} className="icon-mongodb"></i>




        </div>
        <h2 style={secondTitleStyle}>Codewars</h2>
        <img id="codewarsBadge" style={codewarsBadgeStyle} src={"https://www.codewars.com/users/mariajosetamayo/badges/large"} />
      </div>
    )
  }
}

export default Skills;
