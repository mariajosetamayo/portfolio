import React, {Component} from 'react';
import Scrollchor from 'react-scrollchor';
import SideBar from './side-bar';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuVisible: false,
      transform: false,
      distanceFromTop: 0,
    };
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
  }

  onClickMenu (){
    this.setState({menuVisible: !this.state.menuVisible})
  }

  renderLineMenu (){

    if(this.state.menuVisible){
      return(
        <i className="fa fa-close closeIcon" onClick = {this.onClickMenu}></i>
      )
    }
    else{
      return(
        <i className="fa fa-bars fa-lg hamburgerIconMenu" aria-hidden="true" onClick = {this.onClickMenu}></i>
      )
    }
  }

  handleScroll = () => {
    const self = this
    if(this.scrollIcon !== null){
      self.setState({
        distanceFromTop: document.body.scrollTop,
      })
    }
  }

  render (){
    const self = this
    const navBarStyle = {
      backgroundColor: 'rgba(125, 125, 125,' + 0.001*self.state.distanceFromTop + ')'
    }

    return(
      <div id={"navbar"} style={navBarStyle} ref={(ref) => this.scrollIcon = ref} >
        <Scrollchor to="#homeSection" animate={{duration: 900}}><img className = "signature" src={"../photos/MJTsignature.png"} className="logo"/></Scrollchor>
        {this.renderLineMenu()}
        {this.state.menuVisible ? <SideBar /> : null}
      </div>
    )
  }
}

export default Navbar;
