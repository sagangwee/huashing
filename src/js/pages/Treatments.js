import React from "react";
import {Grid, Row, Column} from 'react-cellblock';

export default class Treatments extends React.Component {
  render() {
    return (
      <div>
        <h1 class="page-title">Treatments</h1>

        <h2>Traditional Chinese Medicine</h2>
        <p>
          Traditional Chinese Medicine (TCM) is rooted in the ancient philosophy of Taoism and dates back more than 2,500 years.
          Traditional Chinese Medicine encompasses many different practices, including acupuncture, moxibustion, Chinese herbal medicine, tui na, dietary therapy, tai chi and qigong.
          In the United States, some 10,000 practitioners serve more than 1 million patients each year.
        </p>

        <h2>Acupuncture</h2>
        <p>
          Acupuncture techniques involve stimulating specific points on the body using thin, stainless steel needles.
          These acupuncture points are located along numerous channels or pathways, where energy or Qi circulates in the body. 
          Qi, thought to nourish internal organs and tissues, can alter neural impulses that travel through the body to elicit beneficial responses. 
          By stimulating acupuncture points with specific functions and indications, acupuncturists are able to promote and balance the flow of Qi, relieve pain, reduce stress and restore health. 
        </p>

        <h2>Specialties</h2>
        <ul>
       	  <li>Pain Management</li>
       	  <li>Neck Pain</li>
       	  <li>Back Pain</li>
       	  <li>Shoulder Pain</li>
       	  <li>Obstetrics and Gynaecology (OB-GYN)</li>
        </ul>

        <h2>Issues</h2>
        <Grid>
  	      <Row>
  	        <Column width="1/3">
	  	        <ul>
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
  	        </Column>

  	        <Column width="1/3">
	  	        <ul>
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
  	        </Column>

  	        <Column width="1/3">
  	        	<ul>
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
  	        </Column>
  	      </Row>
      	</Grid>

      	<h2>Treatment Preferences</h2>
      	<Grid>
  	      <Row>
  	        <Column width="1/2">
  	        	<h3>Style/Type</h3>
	  	        <ul>
		        	<li>Auricular Acupuncture</li>                 
		            <li>Chinese Acupuncture</li>
		            <li>Five Element Acupuncture</li>
		            <li>Trigger Point Acupuncture</li> 
		        </ul>
  	        </Column>

  	        <Column width="1/2">
  	        	<h3>Treatment Techniques</h3>
	  	        <ul>
		            <li>Cupping</li>
		            <li>Electro acupuncture</li>
		            <li>Gua Sha</li>
		            <li>Herbal Medicine</li>   
		            <li>Moxibustion</li>
		            <li>Qigong</li>          
		        </ul>
  	        </Column>

  	      </Row>
      	</Grid>
      </div>
    );
  }
}
