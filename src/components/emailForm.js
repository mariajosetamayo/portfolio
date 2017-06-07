import React, {Component} from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import { reduxForm, Field} from 'redux-form';
import {reset} from 'redux-form';
import TextareaAutosize from 'react-textarea-autosize';
import Captcha from './captcha.js';
import ReCAPTCHA from "react-google-recaptcha";



class EmailForm extends Component {
  constructor (props){
    super (props);
    this.state = {
      messageSent: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event){
    event.preventDefault();
    const message = {
      message: this.message.value,
      email: this.email.value,
      name: this.name.value
    }

    this.props.dispatch(
      actions.sendMessageToMaria(message)
    )

    this.message.value = '';
    this.email.value = '';
    this.name.value = '';
  }

  handleSubmit(formProps){
      this.props.signupUser(formProps);
  };

  onCaptchaVerificationChange(value) {
    console.log("Captcha value:", value);
  }


  render() {
    const { handleSubmit, fields: { name, email, message, captcha}} = this.props;

    const captchaStyle = {
      transform: 'scale(0.77)',
      transformOrigin: '0 0'
    }

    return (
      <div className="form-style-8">
        <h2>Send me a message</h2>
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <input type="text" name="field1" placeholder="Full Name" ref={ref => this.name = ref} {...name}/>
          {name.touched && name.error && <div className="error">{name.error}</div>}
          <input type="email" name="field2" placeholder="Email" ref={ref => this.email = ref} {...email}/>
           {email.touched && email.error && <div className="error">{email.error}</div>}
          <input type="url" name="field3" placeholder="Website" />
          <TextareaAutosize maxRows={20} placeholder="Message"  ref={ref => this.message = ref} {...message}/>
          {message.touched && message.error && <div className="error">{message.error}</div>}
          <div className="g-recaptcha" style={captchaStyle} data-sitekey="6Ld0fiIUAAAAAG7rGM4RCiYBkKbrJAqmgUVbqe_7" onCaptchaVerificationChange={this.onCaptchaVerificationChange.bind(this)}></div>
          <input type="button" value="Send Message" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.name){
    errors.name = 'Please enter your name';
  }

  if (!formProps.email){
    errors.email = 'Please enter an email';
  }

  if (!formProps.message){
    errors.message = 'Please enter a message';
  }

  return errors;
};

const mapStateToProps = (state) => ({
  email: state.app.messageSent
});

export default reduxForm({
  form : 'message',
  fields: [ 'name', 'email', 'message', 'captcha'],
  validate: validate
}, mapStateToProps, actions)(EmailForm);
