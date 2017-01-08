import React from "react";
import ResponsiveColumn from "../components/ResponsiveColumn";
import {Grid, Row, Column} from 'react-cellblock';

export default class Treatments extends React.Component {
  render() {
    return (
      <div>
        <h1 class="page-title">Treatments</h1>

        <h2>Specialties</h2>
        <ul class="responsive-ul">
       	  <li>Pain Management</li>
       	  <li>Neck Pain</li>
       	  <li>Back Pain</li>
       	  <li>Shoulder Pain</li>
       	  <li>Obstetrics and Gynaecology (OB-GYN)</li>
        </ul>

        <h2>Issues</h2>
        <Grid>
  	      <Row>
  	        <ResponsiveColumn width="1/3" smallClasses="no-margin top-ul">
	  	        <ul class="responsive-ul">
		        	<li>Addiction</li>                 
		            <li>Allergies</li>
		            <li>Anxiety</li>
		            <li>Arthritis</li> 
		            <li>Asthma</li>
		            <li>Blood Pressure</li>
		            <li>Breathing Problems</li> 
		            <li>Cancer</li>
		            <li>Cholesterol</li>
		            <li>Chronic Fatigue</li>
		            <li>Common Cold</li>
		            <li>Cosmetic Acupuncture</li>
		            <li>Depression</li>
		        </ul>
  	        </ResponsiveColumn>

  	        <ResponsiveColumn width="1/3" smallClasses="no-margin">
	  	        <ul class="responsive-ul no-margin">
		            <li>Diabetes</li>
		            <li>Eating Disorders</li>
		            <li>Eye Problems</li>
		            <li>Facial Acupuncture</li>   
		            <li>Feet</li>
		            <li>Fertility</li>          
		            <li>Fibromyalgia</li>
		            <li>Headache</li>                                      
		            <li>Healing</li>
		            <li>Infertility</li>
		            <li>Migraine</li>
		            <li>Muscle Aches</li>
		            <li>Natural Healing</li>
		        </ul>
  	        </ResponsiveColumn>

  	        <ResponsiveColumn width="1/3" smallClasses="no-margin bot-ul">
  	        	<ul class="responsive-ul">
		            <li>Nutrition</li>
		            <li>Orthopedics</li>
		            <li>Pediatric</li>
		            <li>Pregnancy</li>
		            <li>Sexual Dysfunction</li>
		            <li>Skin Problems</li>
		            <li>Sleep Disorders</li>
		            <li>Spinal Problems</li>
		            <li>Stress</li>
		            <li>Urology</li> 
		            <li>Weight Loss</li>
		        </ul>
  	        </ResponsiveColumn>
  	      </Row>
      	</Grid>

      	<h2>Treatment Preferences</h2>
      	<Grid class="content-margin">
  	      <Row>
  	        <ResponsiveColumn width="1/2">
  	        	<h3>Style/Type</h3>
	  	        <ul class="responsive-ul">
		        	<li>Auricular Acupuncture</li>                 
		            <li>Chinese Acupuncture</li>
		            <li>Five Element Acupuncture</li>
		            <li>Trigger Point Acupuncture</li> 
		        </ul>
  	        </ResponsiveColumn>

  	        <ResponsiveColumn width="1/2">
  	        	<h3>Treatment Techniques</h3>
	  	        <ul class="responsive-ul">
		            <li>Cupping</li>
		            <li>Electro acupuncture</li>
		            <li>Gua Sha</li>
		            <li>Herbal Medicine</li>   
		            <li>Moxibustion</li>
		            <li>Qigong</li>          
		        </ul>
  	        </ResponsiveColumn>

  	      </Row>
      	</Grid>
      </div>
    );
  }
}
