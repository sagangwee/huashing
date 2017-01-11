import React from "react";
import Button from "../components/Button";
import * as ContactActions from "../actions/ContactActions";
import ContactStore from "../stores/ContactStore";
import Formsy from 'formsy-react';
import Input from './Input';

export default class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {name: '', email: '', phone: '', canSubmit: false};

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleValidSubmit(data) {
    console.log("valid form submitted.");
    ContactActions.sendEmail(data);
  }

  render() {
    return (
      <Formsy.Form onValidSubmit={this.handleValidSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <Input name="name" placeholder="Name" value="" required/>
        <Input name="email" placeholder="Email" value="" validations="isEmail" validationError="This is not a valid email" required/>
        <Input name="phone" placeholder="Phone" value=""/>
        <textarea class="input messageBox" placeholder="Message"></textarea>
        <input type="submit" value="Send Message" class="button" disabled={!this.state.canSubmit} />
      </Formsy.Form>
    );
  }
}
