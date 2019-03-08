import React from "react";
import Address from "../components/Address";
import ContactForm from "../components/ContactForm";
import ResponsiveColumn from "../components/ResponsiveColumn";
import {Grid, Row, Column, observeGrid} from 'react-cellblock';

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
const street2 = "4025 W Chandler Blvd";
const number2 = "Suite 3";
const cityStateZip2 = "Chandler, Arizona 85226";

export default function Contact() {

  return (
    <div class="contact-page">
      <div class="contact-phone">
        <h2 style={phoneHeaderStyle}>Phone</h2>
        (480) 951-5785
      </div>

      <div class="contact-location1">
        <h2 style={locationHeaderStyle}>Location 1</h2>
        <Address name={name} street={street1} number={number1} cityStateZip={cityStateZip1} > </Address>
      </div>

      <div class="contact-location2">
        <h2 style={locationHeaderStyle}>Location 2</h2>
        <Address name={name} street={street2} number={number2} cityStateZip={cityStateZip2} > </Address>
      </div>
    </div>
  );
}
