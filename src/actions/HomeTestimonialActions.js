import dispatcher from "../dispatcher";
import contentful from "contentful";

export function getHomeTestimonials() {
  console.log("getHomeTestimonials action");
  console.log(process.env.CONTENTFUL_SPACE);
  var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  client.getEntries({
    'content_type': "1M3JzjPphUHwe0eJRxqgaq"
  })
  .then( (entries) => {
    console.log('got home testimonials');
    dispatcher.dispatch({type: "RECEIVE_HOME_TESTIMONIALS", homeTestimonials: entries});
  }); 
}
