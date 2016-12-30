import React from "react";
import Address from "../components/Address";
import {Grid, Row, Column} from 'react-cellblock';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      	<h1>Contact</h1>
      	<Grid>
  	      <Row>
  	        <Column width="1/2">
  	          // Contact form
  	        </Column>
  	        <Column width="1/2">
  	          // Location, phone number, hours
  	          <h4>Location</h4>
  	          <Address> </Address>

  	          <h4>Additional Location</h4>

  	        </Column>
  	      </Row>
      	</Grid>
      </div>
    );
  }
}
