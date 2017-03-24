import React from 'react';

export default function Home (props){
  const sectionStyle = {
    textAlign: 'center',
    paddingTop: '238px',
    fontSize: '20px',
  }
  const nameStyle = {
    color: '#282828'
  }
  const profStyle = {
    color:'#707070'
  }

  const dividerStyle = {
    width: '40%',
  }
  return (
    <div style={sectionStyle}>
      <h1 style= {nameStyle}>Maria Jose Tamayo</h1>
      <hr style={ dividerStyle}/>
      <h3 style={profStyle}>Full Stack Web Developer, MIPH</h3>
    </div>
  )
}
