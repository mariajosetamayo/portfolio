import React, {Component} from 'react';

export default function SideBar (props){
  const sectionStyles = {
    // backgroundColor: 'red',
    width: '20%',
    float: 'right',
    clear: 'right',
    textAlign: 'center'
  }
  return (
    <div style={sectionStyles}>
      <h2>
        Home
      </h2>
      <h2>
        About me
      </h2>
      <h2>
        Projects
      </h2>
      <h2>
        Contact
      </h2>
    </div>
  )
}
