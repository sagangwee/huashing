import React from "react";
import { AppRegistry, View, Image } from 'react-native';
import huawang from "../../assets/huawang.jpg";

export default class About extends React.Component {
  render() {
    return (
		<div>
			<h1>About</h1>
			<div>
				<Image source={require("../../assets/huawang.jpg")} />
				<p>Hua Wang LAc is an Expert in TCM (Traditional Chinese Medicine) and acupuncture. 
					She graduated from Cheng Du University of Traditional Chinese Medicine in China after 5 years of study. 
					Hua Wang has been practicing acupuncture and TCM since 1993. 
					She has earned extremely valuable acupuncture clinical experience when she worked in China. </p>

			</div>
		</div>
    );
  }
}
