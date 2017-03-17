import React, {Component} from 'react';
// import Carousel from 'nuka-carousel';

class Project extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  renderProject(){
    const sectionStyles={
      maxWidth: '100%',
      height: 'auto',
    }

    if(this.props.project === 'project1'){
      return(
        <div>
          <h2>cat</h2>
          <img src='http://placekitten.com/g/1000/500' style={sectionStyles}/>
        </div>
      )
    }
    else if(this.props.project === 'project2'){
      return(
        <div>
          <h2>cat2</h2>
          <img src='http://placekitten.com/g/1000/500' style={sectionStyles}/>
        </div>
      )
    }
    else if(this.props.project === 'project3'){
      return(
        <div>
          <h2>cat3</h2>
          <img src='http://placekitten.com/g/1000/500' style={sectionStyles}/>
        </div>
      )
    }
  }

  render() {


    return (
      <div >
        {this.renderProject()}
      </div>
    );
  }
}

export default Project;
