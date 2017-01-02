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
            <div class="insurance">
            	<Grid>
		  	      <Row>
		  	        <Column width="1/4">
		  	        	<div class="logo"><img src={require("./../../assets/insurance/aetna.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/amerigroup.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/amerihealth.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/anthem.jpg")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/beech-street.png")}/></div>
		  	        </Column>

		  	        <Column width="1/4">
		  	        	<div class="logo"><img src={require("./../../assets/insurance/blue.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/cigna.jpg")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/empire.jpg")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/first-choice-health.png")}/></div>
		  	        </Column>

		  	        <Column width="1/4">
		  	        	<div class="logo"><img src={require("./../../assets/insurance/great-west.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/health-net.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/horizon.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/humana.png")}/></div>
		  	        </Column>

		  	        <Column width="1/4">
		  	        	<div class="logo"><img src={require("./../../assets/insurance/oxford.png")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/triwest.jpg")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/united.jpg")}/></div>
		            	<div class="logo"><img src={require("./../../assets/insurance/wellpoint.png")}/></div>
		  	        </Column>

		  	      </Row>
		      	</Grid>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
