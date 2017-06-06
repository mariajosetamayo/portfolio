import React from 'react';

function Project (props) {

  return (
    <div>
      <div className="projectDiv">
        <h2 className = "projectName">Outdoor Sagas</h2>
        <p className="projectDescription">Outdoor Sagas is a full-stack application that allows users to record, share, and save memories of their outdoor adventures in one place.</p>
        <p><a href="https://github.com/mariajosetamayo/outdoor-sagas-app"><i className="fa fa-github github" aria-hidden="true"></i></a><a href="https://outdoor-sagas.herokuapp.com/" target="_blank"><i className="fa fa-link  websiteLink" aria-hidden="true"></i></a></p>
        <a href="https://outdoor-sagas.herokuapp.com/" target="_blank"><img src={'../photos/outdoorSagasNew.jpg'} className="projectPhoto"/></a>
      </div>
      <div className="projectDiv">
        <h2 className = "projectName">FoodTrack</h2>
        <p className="projectDescription">FoodTrack is a full-stack application to keep track of what you eat, get recommendations, and a daily report summarizing the nutrients you consumed.</p>
        <p><a href="https://github.com/mariajosetamayo/foodTrack"><i className="fa fa-github github" aria-hidden="true"></i></a><a href="https://food-track.herokuapp.com/" target="_blank"><i className="fa fa-link  websiteLink" aria-hidden="true"></i></a></p>
        <a href="https://food-track.herokuapp.com/" target="_blank"><img src={'../photos/foodTrackScreenShot2.jpg'} className="projectPhoto"/></a>
      </div>
      <div className="projectDiv">
        <h2 className = "projectName">Muncheck</h2>
        <p className="projectDescription">Muncheck is an application to check the  nutritional facts about almost any food item and whether it is recommended given a particular dietary requirement (diabetes, kidney disease and weight loss).</p>
        <p><a href="https://github.com/mariajosetamayo/muncheck"><i className="fa fa-github github" aria-hidden="true"></i></a><a href="https://mariajosetamayo.github.io/muncheck/" target="_blank"><i className="fa fa-link  websiteLink" aria-hidden="true"></i></a></p>
        <a href="https://mariajosetamayo.github.io/muncheck/" target="_blank"><img src={'../photos/muncheckNew.png'} className="projectPhoto"/></a>
      </div>
    </div>
  );
}

export default Project;
