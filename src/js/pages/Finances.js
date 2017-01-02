import React from "react";
import {Grid, Row, Column} from 'react-cellblock';

export default class Finances extends React.Component {
  render() {
    return (
      <div>
        <h1 class="page-title">Finances</h1>

        <div>
          <div class="finance-section">
            <h2 class="center-text">Average Cost per Session </h2>
            <div class="price">$60 - $200</div>
          </div>

          <div class="finance-section">
            <h2 class="center-text">Accepted Payment Methods</h2>
            <div class="payment-methods center-text">
              <Grid>
		  	      <Row>
		  	        <Column width="1/3">
		  	        	<img src={require("./../../assets/check.jpg")} class="finance-img"/>
		  	        	<div>Check</div>
		  	        </Column>

		  	        <Column width="1/3">
		  	        	<img src={require("./../../assets/mastercard.png")} class="finance-img mastercard"/>
		  	        	<div>Mastercard</div>
		  	        </Column>

		  	        <Column width="1/3">
		  	        	<img src={require("./../../assets/visa.png")} class="finance-img visa"/>
		  	        	<div>Visa</div>
		  	        </Column>
		  	      </Row>
		      	</Grid>
            </div>
          </div>

          <div class="finance-section">
            <h2 class="center-text">Accepted Insurance Plans</h2>
            <div class="insurance"></div>
          </div>
        </div>

      </div>
    );
  }
}
