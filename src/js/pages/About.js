import React from "react";

export default class About extends React.Component {
  componentDidMount() {
  	document.body.scrollTop = 0;
  }
  
  render() {
    return (
		<div>
			<h1 class="page-title">About</h1>
			<div class="about-container">
				<div class="name-module">
					<img src={require("./../../assets/huawang.jpg")} class="huawang"/>
					<div class="title-module">
						<h1>Hua Wang LAc</h1>
						<h2 class="headline-module">Acupuncture Specialist </h2>
					</div>
				</div>
				<div class="summary-module">
					<h2 class="tagline"> Quality. Love. Responsibility.</h2>
					<p>Hua Wang is an expert in TCM (Traditional Chinese Medicine) and acupuncture specializing in pain and stress management. 
					She graduated from Cheng Du University of Traditional Chinese Medicine in China after 5 years of study. 
					Hua Wang has been practicing acupuncture and TCM since 1993. </p>
				</div>
				<div class="qualifications-module">
					<h2 class="qualifications-header">Qualifications</h2>
					<br/>
					<strong class="bold-brown">Years in Practice:</strong> 20+ <br/>
					<strong class="bold-brown">Education:</strong> Cheng Du University of TCM 1993 <br/>
					<strong class="bold-brown">License No. and State:</strong> 0438 Arizona <br/>
					<strong class="bold-brown">Languages:</strong> English, Mandarin
				</div>
			</div>
		</div>
    );
  }
}
