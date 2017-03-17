import React from 'react';

export default function AboutMe (props){
  const sectionStyle = {
    textAlign: 'center',
    paddingTop: '150px',
    // fontSize: '20px',
  }
  const nameStyle = {
    color: '#282828',
    fontSize: '35px'
  }
  const profStyle = {
    color:'#707070',
    fontSize: '20px'
  }
  return (
    <div style={sectionStyle}>
      <h1 style= {nameStyle}>About Me</h1>
      <p style={profStyle}>Coming soon</p>
    </div>
  )
}
