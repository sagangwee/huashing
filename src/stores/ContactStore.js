import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ContactStore extends EventEmitter {
  constructor() {
    super()
    this.data = {name: '', email: '', phone: ''};
  }

  submitForm(data) {
    this.data = data;
    this.emit("change");
  }

  getAll() {
    return this.data;
  }

  handleActions(action) {
    switch(action.type) {
      case "SUBMIT_FORM": {
        this.submitForm(action.data);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const contactStore = new ContactStore;
dispatcher.register(contactStore.handleActions.bind(contactStore));

export default contactStore;
