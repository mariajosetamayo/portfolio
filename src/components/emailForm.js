import React, {Component} from 'react';
import muicss from 'muicss/react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import * as actions from '../actions/index';
import {connect} from 'react-redux';




class EmailForm extends Component {
  constructor (props){
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event){
    event.preventDefault();
    const message = this.message.value

    console.log('this is the message', message)
    this.props.dispatch(
      actions.sendMessageToMaria(message)
    )
  }
  render() {
    return (
      <form>
        <input type="text" ref={ref => this.message = ref} />
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.app.messageSent
});

export default connect(mapStateToProps)(EmailForm);
