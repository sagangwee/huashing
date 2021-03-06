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
            <div class="price"><span>$60 - $200</span></div>
          </div>

          <div class="finance-section">
            <h2 class="center-text">Accepted Payment Methods</h2>
            <div class="payment-methods center-text">
            	<ul>
		        	<li>
		        		<img src="img/check.jpg" class="finance-img"/>
						<div>Check</div>
		        	</li>

		        	<li>
		        		<img src="img/mastercard.png" class="finance-img mastercard"/>
		        		<div>Mastercard</div>
		        	</li>

		        	<li>
		        		<img src="img/visa.png" class="finance-img visa"/>
		        		<div>Visa</div>
					</li>
  	        	</ul>
            </div>
          </div>

          <div class="finance-section">
            <h2 class="center-text">Accepted Insurance Plans</h2>
            <div class="insurance">
            	<ul>
	  	        	<li><img src="img/insurance/aetna.png"/></li>
	            	<li><img src="img/insurance/amerigroup.png"/></li>
	            	<li><img src="img/insurance/amerihealth.png"/></li>
	            	<li><img src="img/insurance/anthem.jpg"/></li>
	            	<li><img src="img/insurance/beech-street.png"/></li>

	  	        	<li><img src="img/insurance/blue.png"/></li>
	            	<li><img src="img/insurance/cigna.jpg"/></li>
	            	<li><img src="img/insurance/empire.jpg"/></li>
	            	<li><img src="img/insurance/first-choice-health.png"/></li>

	  	        	<li><img src="img/insurance/great-west.png"/></li>
	            	<li><img src="img/insurance/health-net.png"/></li>
	            	<li><img src="img/insurance/horizon.png"/></li>
	            	<li><img src="img/insurance/humana.png"/></li>

	  	        	<li><img src="img/insurance/oxford.png"/></li>
	            	<li><img src="img/insurance/triwest.jpg"/></li>
	            	<li><img src="img/insurance/united.jpg"/></li>
	            	<li><img src="img/insurance/wellpoint.png"/></li>
            	</ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
