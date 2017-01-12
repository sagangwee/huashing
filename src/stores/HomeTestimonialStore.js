import { EventEmitter } from "events";
import * as HomeTestimonialActions from "../actions/HomeTestimonialActions";
import dispatcher from "../dispatcher";

class HomeTestimonialStore extends EventEmitter {
  constructor() {
    super()
    this.homeTestimonials = [];
    HomeTestimonialActions.getHomeTestimonials();
  }

  getAll() {
    return this.homeTestimonials;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_HOME_TESTIMONIALS": {
        this.homeTestimonials = action.homeTestimonials;
        this.emit("change");
        break;
      }
    }
  }

}

const homeTestimonialStore = new HomeTestimonialStore;
dispatcher.register(homeTestimonialStore.handleActions.bind(homeTestimonialStore));

export default homeTestimonialStore;
