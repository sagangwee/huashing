import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ContactStore extends EventEmitter {
  constructor() {
    super()
    this.data = {
      name: '', 
      email: '', 
      phone: '', 
      canSubmit: false,
      buttonText: "Send Message"
    };
  }

  updateButton() {
    this.disableButton();
    this.data.buttonText = "Sent!";
    console.log("updated button in store", this.data);
    this.emit("change");
  }

  disableButton() {
    this.data.canSubmit = false;
  }

  getAll() {
    return this.data;
  }

  handleActions(action) {
    switch(action.type) {
      case "SUBMITTED_FORM": {
        this.updateButton();
        break;
      }
    }
  }

}

const contactStore = new ContactStore;
dispatcher.register(contactStore.handleActions.bind(contactStore));

export default contactStore;
