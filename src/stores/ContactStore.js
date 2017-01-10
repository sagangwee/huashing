import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ContactStore extends EventEmitter {
  constructor() {
    super()
    this.data = {name: '', email: '', phone: ''};
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.data;
  }

  handleActions(action) {
    switch(action.type) {
      case "SUBMIT_FORM": {
        this.createTodo(action.text);
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

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
