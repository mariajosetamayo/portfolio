import React from 'react';

export default function AboutMe (props){

  return (
    <div className="aboutMeSection">
      <hr />
      <h1 className="aboutMeSectionTitle">About Maria</h1>
      <img src={'../photos/myPhoto.png'} className="myPhoto"/>
      <p className="firstParagraphAboutMe">Maria thinks days are formed of little adventures, from writing a line of code to climbing a mountain (literally). Since a young age, her sense of adventure has taken her to travel around the world and to live in three different countries. She is a highly empathetic person, a creative, and a little bit of a scientist.</p>
      <p className="secondParagraphAboutMe">After working in Public Health for many years, she realized the power that web applications have not only in empowering people to manage their health better, but also the positive impact they can have in improving life in general. As she began exploring the new but at the same time familiar world of web applications, she discovered a new passion for this field and decided to become a web developer.</p>

    </div>
  )
}
