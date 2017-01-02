import React from "react";

import Testimonial from "../components/Testimonial";

export default class Testimonials extends React.Component {
  render() {
    const testimonialText1 = "I had very painful, stiff and swollen joints due to possible rheumatiod arthritis. My doctor prescribed prednisone and a strong anti-inflammatory. Instead of taking the medication, I began acupuncture with Dr. Wang. I went two times a week for five weeks and now I am pain free!! I highly recommend Dr. Wang. She is professional and kind. She listens and adjusts her treatments to best treat the patient. You won't regret seeing Dr. Wang if you have an illness that acupuncture can treat!";
    const testimonialText2 = "I have gone to Dr Wang for the past 4 years. I tried other acupuncturists in the past, but none were as good as Hua Wang. She is a doctor trained in China. She really knows the art. I am a beautician with a salon in Scottsdale. I am glad that her office is nearby. Her fees are actually lower than many of the other acupuncturists I have gone to.";
    const testimonialText3 = "Dr Hua Wang is the best acupuncturist of the six I have had treat me. I began seeing her for acute sciatica in April, 2008. I had significant improvement after 4 or 5 treatments though it took about 40 sessions to completely resolve it. She is very thorough. Shortly after I began seeing her I realized she could also treat me for IBS that I have had for over 30 years. Medical doctors have been unsuccessful in treating my IBS. The IBS is improving. I do have to watch my diet, but diet alone is not enough. From Dr. Wang I learned there is a difference in Japanese and Chinese acupuncture techniques. In Japanese acupuncture the needles are not inserted as deep nor are the needles left in as long. In Chinese acupuncture the needles are inserted deeper and then turned every 15 minutes for about an hour to stimulate the Qi. I believe this is the reason I have experienced better results from Dr. Wang who practices Chinese acupuncture techniques. Dr Wang also uses infrared heat, Moxabustion, Tui Na (Chinese massage), Chinese herbs, cupping, and more to enhance her patients' healing. She also healed my 24-year-old son's carpal tunnel and shoulder pain in only 4 visits. Dr. Hua Wang is very kind and caring. She is an exceptional and knowledgeable acupuncturist. I highly recommend Dr. Hua Wang."

    return (
      <div>
        <h1 class="page-title">Testimonials</h1>
        <div>
          <Testimonial text={testimonialText1}></Testimonial>
          <Testimonial text={testimonialText2}></Testimonial>
          <Testimonial text={testimonialText3}></Testimonial>
        </div>
      </div>
    );
  }
}
