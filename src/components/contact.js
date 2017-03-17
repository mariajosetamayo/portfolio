import React from 'react';

export default function Contact (props){
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
    color:'#707070',
    fontSize: '20px'
  }
  return (
    <div style={sectionStyle}>
      <h1 style= {nameStyle}>Contact</h1>
      <p style={profStyle}>Coming Soon</p>
    </div>
  )
}
