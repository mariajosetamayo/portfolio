import React, {Component} from 'react';
import Recaptcha from 'react-recaptcha';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


const callback = function (){
  console.log ('re-captcha loaded')
}

class Captcha extends Component {
  constructor(props){
    super(props)
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  verifyCallback (response){
    if(response){
      this.props.dispatch(
        actions.recaptchaVerification('not a robot')
      )
    }
  }

  render() {
    return (
      <div className="g-recaptcha">
        <Recaptcha
          sitekey="6Ld0fiIUAAAAAG7rGM4RCiYBkKbrJAqmgUVbqe_7"
          render="explicit"
          verifyCallback={this.verifyCallback}
          onloadCallback={callback}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  captchaVerified: state.app.recaptchaVerified
});


export default connect (mapStateToProps)(Captcha);
