import React from "react";
import { MessageInput } from "./Message/MessageInput";
import { EmailInput } from "./EmailInput/EmailInput";
import { Button } from "../button/Button";
import styles from "./Form.module.css";

export class MessageForm extends React.Component {
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

  clearInput = () => {
    this.setState({ inputValue: "" });
  };

  onClickHandler = () => {
    return this.state.inputValue
      ? this.clearInput()
      : this.props.btnOnClick(true);
  };

  render() {
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
          onClick={() => this.onClickHandler()}
        >
          Send message
        </Button>
      </div>
    );
  }
}
