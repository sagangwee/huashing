import React from "react";
import Button from "../components/Button";
import {Grid, Row, Column} from 'react-cellblock';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', phone: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log("form submitted.");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input class="input" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
        <input class="input" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
        <input class="input" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange}></input>
        <textarea class="input messageBox" placeholder="Message"></textarea>
        <input type="submit" value="Send Message" class="button" />
      </form>
    );
  }
}
