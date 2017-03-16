import React from 'react';

export default function Contact (props){
  const sectionStyle = {
    textAlign: 'center',
    paddingTop: '150px',
    // fontSize: '20px',
  }
  const nameStyle = {
    color: '#282828'
  }
  const profStyle = {
    color:'#707070'
  }
  return (
    <div style={sectionStyle}>
      <h1 style= {nameStyle}>Contact</h1>
      <p style={profStyle}>Coming Soon</p>
    </div>
  )
}
