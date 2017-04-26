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
  const photoStyle = {
    width: '236px',
    borderRadius: '2px'
  }

  const textStyle = {
    padding: '3%',
    fontSize: '20px'
  }

  const textStyle2 = {
    padding: '5%',
    fontSize: '20px',
    marginTop: '-7%',
    marginBottom: '-26%'
  }
  return (
    <div className="aboutMeSection" style={sectionStyle}>
      <hr />
      <h1 style= {nameStyle}>About Maria</h1>
      <img src={'../photos/myPhoto.jpg'} style={photoStyle}/>
      <p style={textStyle}>Maria thinks days are formed of little adventures, from writing a line of code to climbing a mountain (literally). Since a young age, her sense of adventure has taken her to travel around the world and to live in three different countries. She is a highly empathetic person, a creative, and a little bit of a scientist.</p>
      <p style={textStyle2}>After working in Public Health for many years, she realized the power that web applications have not only in empowering people to manage their health better, but also the positive impact they can have in improving life in general. As she began exploring the new but at the same time familiar world of web applications, she discovered a new passion for this field and decided to become a web developer.</p>

    </div>
  )
}
