import React, {Component} from 'react';
import EmailForm from './emailForm';

 class Contact extends Component{
   constructor (props){
     super (props);
   }


  renderAlert(){
    const errorStyle = {
      color: '#832017',
      padding: '10px',
      border: 'solid',
      width: '300px',
      margin: '0 auto'
    }
    if(this.props.messageError){
      return (
        <div style={errorStyle}>
          <strong>Oops!</strong> {this.props.messageError}
        </div>
      );
    }
  };

  render (){
    const sectionStyle = {
      textAlign: 'center',
      paddingTop: '30%',
      // fontSize: '20px',
    }
    const nameStyle = {
      color: '#282828',
      fontSize: '35px'
    }
    const profStyle = {
      color:'#282828',
      fontSize: '20px',
      padding: '3%'
    }

    const websiteLinkStyles = {
      fontSize: '2.5em',
      color: '#282828',
      paddingLeft: '5%'
    }

    const emailLogoStyles = {
      fontSize: '2.5em',
      color: '#282828',
      // paddingLeft: '5%'
    }

    const githubLogoStyles = {
      fontSize: '3.3em',
      color: '#282828',
      paddingLeft: '4%'
    }

    const logosLineStyle = {
      paddingTop: '20px',
      paddingBottom: '30px'
    }

    const messageSentStyle = {
      color: '#2bba4c',
      padding: '10px',
      border: 'solid',
      width: '300px',
      margin: '0 auto'
    }

    const codewarsBadgeStyle = {
      width: '280px',
      height: 'auto',
      paddingBottom: '22px'
    }

    return (
      <div style={sectionStyle}>
        <hr />
        <h1 style= {nameStyle}>Contact</h1>
        <p style={profStyle}>I always look forward to hear about new projects and challenges! Here are a few ways to contact me: </p>
        {this.props.messageStatus ? <div style={messageSentStyle}>Your message has been sent</div> : <EmailForm />}
        {this.props.messageStatus ? null : this.renderAlert()}
        <p style={logosLineStyle}><a href="mailto:mariajose.tamayo@gmail.com"><i className="fa fa-envelope" aria-hidden="true" style={emailLogoStyles}></i></a><a href="https://github.com/mariajosetamayo" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://www.linkedin.com/in/maria-tamayo-web-developer/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" style={websiteLinkStyles}></i></a><a href="https://www.facebook.com/mariajose.tamayo" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true" style={websiteLinkStyles}></i></a><a href="https://www.instagram.com/mjtmayo/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
        <a href="https://www.codewars.com/users/mariajosetamayo" target="_blank"><img id="codewarsBadge" style={codewarsBadgeStyle} src={"https://www.codewars.com/users/mariajosetamayo/badges/large"} /></a>
        <p><i className="fa fa-copyright" aria-hidden="true"></i>2017, Maria Jose Tamayo. All Rights Reserved</p>
      </div>
    )
  }
}

export default Contact;
