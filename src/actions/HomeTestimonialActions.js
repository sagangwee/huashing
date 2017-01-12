import dispatcher from "../dispatcher";
import contentful from "contentful";

export function getHomeTestimonials() {
  console.log("getHomeTestimonials action");
  var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'dljc4c2h05dt',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '0b7f6x59a0'
  });

  client.getEntries({
    'content_type': "1M3JzjPphUHwe0eJRxqgaq"
  })
  .then( (entries) => {
    console.log('got home testimonials');
    dispatcher.dispatch({type: "RECEIVE_HOME_TESTIMONIALS", homeTestimonials: entries});
  });
    
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: });
  }, 1000);
}
