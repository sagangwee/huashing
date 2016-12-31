import React from "react";
import Button from "../components/Button";
import {Grid, Row, Column} from 'react-cellblock';

export default class ContactForm extends React.Component {
  render() {

    return (
      <div>
        <div><input class="input" placeholder="Name"></input></div>
        <input class="input" placeholder="Email"></input>
        <input class="input" placeholder="Phone"></input>
        <textarea class="input messageBox" placeholder="Message"></textarea>
        <Button text="Send Message"></Button>
      </div>
    );
  }
}
