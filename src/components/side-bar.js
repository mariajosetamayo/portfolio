import React, {Component} from 'react';
import {Link} from 'react-router';
import Scrollchor from 'react-scrollchor';

export default function SideBar (props){
  const sectionStyles = {
    display: 'block',
    left: 'auto',
    right: '0px',
    position: 'fixed',
    top: '0',
    height: '100%',
    zIndex: '999999',
    width: '260px',
    backgroundColor: 'rgba(112, 112, 112, 0.9)',
    color: '#FFF',
    width: '20%',
    textAlign: 'center'
  }
  return (
    <div className="sideBar" style={sectionStyles}>
      <Scrollchor to="#homeSection" animate={{duration: 900}}>
        <h2>
          Home
        </h2>
      </Scrollchor>
      <Scrollchor to="#projectsSection" animate={{offset: -100, duration: 900}}>
        <h2>
          Projects
        </h2>
      </Scrollchor>
      <Scrollchor to="#aboutMeSection" animate={{duration: 900}}>
        <h2>
          About me
        </h2>
      </Scrollchor>
      <Scrollchor to="#contactSection" animate={{duration: 900}}>
        <h2>
          Contact
        </h2>
      </Scrollchor>
    </div>
  )
}
