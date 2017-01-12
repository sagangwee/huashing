import dispatcher from "../dispatcher";
import contentful from "contentful";
import config from "../config";

export function getHomeTestimonials() {
  console.log("getHomeTestimonials action");
  console.log(process.env.CONTENTFUL_SPACE);
  console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
  var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: config.CONTENTFUL_SPACE || process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: config.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN
  });

  client.getEntries({
    content_type: "homeTestimonial"
  })
  .then( (entries) => {
    console.log('got home testimonials');
    dispatcher.dispatch({type: "RECEIVE_HOME_TESTIMONIALS", homeTestimonials: entries});
  }); 
}
