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
    console.log('the click is working')
    this.setState({menuVisible: !this.state.menuVisible})
  }

  render (){
    const navBarStyle = {
      position: 'fixed',
      zIndex: '1'
    }
    const sectionStyles = {
      fontSize: '2.3em',
      float: 'right',

    }
    const logoStyle = {
      width: '39%',
      marginTop: '-8%',
      marginLeft: '-15%'
    }
    return(
      <div style={navBarStyle}>
        <img src={'../photos/mjSignature.png'} style={logoStyle}/>
        <i className="fa fa-bars fa-lg" aria-hidden="true" style = {sectionStyles} onClick = {this.onClickMenu}></i>
        {this.state.menuVisible ? <SideBar /> : null}
      </div>

    )
  }
}

export default Navbar;
