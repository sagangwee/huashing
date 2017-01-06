import React from "react";
import Address from "../components/Address";
import ContactForm from "../components/ContactForm";
import {Grid, Row, Column, observeGrid} from 'react-cellblock';

const Section = observeGrid(function (props) {
  if (props.colWidth <= 4) {
    return (
      <Column>
        { props.children }
      </Column>
    );
  }

  return (
    <Column width="1/2">
      { props.children }
    </Column>
  );
});

const locationHeaderStyle = {
  marginBottom: "0.5em",
  marginTop: "1em"
}
const phoneHeaderStyle = {
  marginTop: "0",
  marginBottom: "0.5em"
}
const name = "Huashing Acupuncture & Chinese Medicine";
const street1 = "10630 N 71st PL";
const number1 = "Suite 1";
const cityStateZip1 = "Scottsdale, Arizona 85254";
const street2 = "4425E Agave Rd";
const number2 = "Suite 106";
const cityStateZip2 = "Phoenix, Arizona 85044";

export default function Contact() {

  return (
    <div>
    	<h1 class="page-title">Contact</h1>
    	<Grid>
	      <Row>
	        <Section width="1/2">
	          <ContactForm> </ContactForm>
	        </Section>
	        <Section width="1/2">
	          <h4 style={phoneHeaderStyle}>Phone</h4>
	          (480) 951-5785 
	          <h4 style={locationHeaderStyle}>Location</h4>
	          <Address name={name} street={street1} number={number1} cityStateZip={cityStateZip1} > </Address>

	          <h4 style={locationHeaderStyle}>Additional Location</h4>
	          <Address name={name} street={street2} number={number2} cityStateZip={cityStateZip2} > </Address>

	        </Section>
	      </Row>
    	</Grid>
    </div>
  );
}
