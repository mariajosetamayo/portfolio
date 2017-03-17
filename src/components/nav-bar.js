import React, {Component} from 'react';
import SideBar from './side-bar';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuVisible: false
    };
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  onClickMenu (){
    this.setState({menuVisible: !this.state.menuVisible})
  }

  renderLineMenu (){
    const sectionStyles = {
      fontSize: '2.3em',
      float: 'right',
      paddingRight: '3%'
    }
    const sectionStyles2 = {
      fontSize: '2.3em',
      float: 'right',
      paddingRight: '23%'
    }
    if(this.state.menuVisible){
      return(
        <i className="fa fa-bars fa-lg" aria-hidden="true" style = {sectionStyles2} onClick = {this.onClickMenu}></i>
      )
    }
    else{
      return(
        <i className="fa fa-bars fa-lg" aria-hidden="true" style = {sectionStyles} onClick = {this.onClickMenu}></i>
      )
    }
  }

  render (){
    const navBarStyle = {
      position: 'fixed',
      zIndex: '1',
      width: '100%'
    }
    const sectionStyles = {
      fontSize: '2.3em',
      float: 'right',
      paddingRight: '3%'

    }
    const logoStyle = {
      width: '39%',
      marginTop: '-8%',
      marginLeft: '-15%'
    }
    return(
      <div style={navBarStyle}>
        <img src={'../photos/mjSignature.png'} style={logoStyle}/>
        {this.renderLineMenu()}
        {this.state.menuVisible ? <SideBar /> : null}
      </div>

    )
  }
}

export default Navbar;
