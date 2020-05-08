import React from "react";
import { MessageInput } from "./MessageInput";
import { EmailInput } from "./EmailInput";
import { Button } from "../button/Button";
import styles from "./Form.module.css";

export class Form extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.updateInputValue(e);
    this.removeErrorMessage();
  };

  updateInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  removeErrorMessage = () => {
    if (!this.state.inputValue) {
      this.props.btnOnClick(false);
    }
  };

  handleClick = () => {
    this.setState({ inputValue: "" });
  };

  render() {
    console.log(this.state.inputValue);
    return (
      <div className="flex flex-col items-center p-8">
        <EmailInput doctorInfo={this.props.doctorInfo} />
        <MessageInput
          stateUpdateMethod={this.handleChange}
          textAreaTextValue={this.state.inputValue}
        />
        <Button
          btnStyle={
            styles.btn +
            " bg-blue-700 hover:bg-blue-700 text-white py-2 px-4 rounded "
          }
          onClick={
            this.state.inputValue
              ? this.handleClick
              : () => this.props.btnOnClick(true)
          }
          content="Send message"
        />
      </div>
    );
  }
}
