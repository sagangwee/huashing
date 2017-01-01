import React from "react";

export default class About extends React.Component {
  render() {
    return (
		<div>
			<h1>About</h1>
			<div>
				<div class="name-module">
					<img src={require("./../../assets/huawang.jpg")} class="huawang"/>
					<div class="title-module">
						<h1>Hua Wang LAc</h1>
						<h2 class="headline-module">Acupuncture Specialist </h2>
					</div>
				</div>
				<div class="summary-module">
					<p>Hua Wang is an expert in TCM (Traditional Chinese Medicine) and acupuncture. 
					She graduated from Cheng Du University of Traditional Chinese Medicine in China after 5 years of study. 
					Hua Wang has been practicing acupuncture and TCM since 1993. </p>
				</div>
			</div>
		</div>
    );
  }
}
