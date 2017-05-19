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
    const sectionStyles = {
      fontSize: '2.3em',
      float: 'right',
      paddingRight: '3%',
      marginTop: '1.4%',
      color: '#434343'
    }
    const sectionStyles2 = {
      fontSize: '2.3em',
      float: 'right',
      paddingRight: '23%',
      marginTop: '1.4%',
      color: '#434343'
    }
    if(this.state.menuVisible){
      return(
        <i className="fa fa-close closeIcon" style = {sectionStyles2} onClick = {this.onClickMenu}></i>
      )
    }
    else{
      return(
        <i className="fa fa-bars fa-lg" aria-hidden="true" style = {sectionStyles} onClick = {this.onClickMenu}></i>
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
      position: 'fixed',
      zIndex: '1',
      width: '100%',
      // backgroundColor: 'rgba(127, 124, 124,' + 0.001*self.state.distanceFromTop + ')'
      backgroundColor: 'rgba(120, 144, 156,' + 0.001*self.state.distanceFromTop + ')'
    }
    const sectionStyles = {
      fontSize: '2.3em',
      float: 'right',
      paddingRight: '3%'

    }
    const logoStyle = {
      width: '63px',
      marginTop: '1%',
      marginLeft: '3%',
      paddingBottom: '1%'
    }
    return(
      <div id={"navbar"} style={navBarStyle} ref={(ref) => this.scrollIcon = ref} >
        <Scrollchor to="#homeSection" animate={{duration: 900}}><img className = "signature" src={'../photos/MJTsignature.png'} style={logoStyle}/></Scrollchor>
        {this.renderLineMenu()}
        {this.state.menuVisible ? <SideBar /> : null}
      </div>

    )
  }
}

export default Navbar;
