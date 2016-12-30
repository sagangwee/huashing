import React from "react";
import {Grid, Row, Column} from 'react-cellblock';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      	<h1>Contact</h1>
      	<Grid>
  	      <Row>
  	        <Column width="1/2">
  	          Left!
  	        </Column>
  	        <Column width="1/2">
  	          Right!
  	        </Column>
  	      </Row>
      	</Grid>
      </div>
    );
  }
}
