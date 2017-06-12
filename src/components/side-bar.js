import React, {Component} from 'react';
import {Link} from 'react-router';
import Scrollchor from 'react-scrollchor';

export default function SideBar (props){

  return (
    <div className="sideBar" >
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
