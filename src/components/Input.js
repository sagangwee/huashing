import React from "react";
import Formsy from 'formsy-react';

const Input = React.createClass({
  getInitialState() {
    return {
      canSubmit: false
    }
  },

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    const { 
      placeholder,
      name,
      type
    } = this.props;

    if (type == "textarea") {
	  return (
        <div className={className}>
          <textarea class="input messageBox" name={name} placeholder="Message" onChange={this.changeValue} value={this.getValue()}></textarea>
          <span class="validation-error">{errorMessage}</span>
        </div>
      );
    }
    
    return (
      <div className={className}>
        <input class="input" name={name} placeholder={placeholder} type="text" onChange={this.changeValue} value={this.getValue()}/>
        <span class="validation-error">{errorMessage}</span>
      </div>
    );
  }
});

export default Input;