import dispatcher from "../dispatcher";
import contentful from "contentful";

export function getHomeTestimonials() {
  console.log("access_token: ", process.env.CONTENTFUL_ACCESS_TOKEN);
  var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  client.getEntries({
    content_type: "homeTestimonial"
  })
  .then( (entries) => {
    const testimonials = [];
    const array = entries.items;
    for (var index in array) {
      testimonials.push(array[index].fields.testimonialText);
    }
    dispatcher.dispatch({type: "RECEIVE_HOME_TESTIMONIALS", homeTestimonials: testimonials});
  }); 
}
