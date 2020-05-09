import React from "react";
import { MessageForm } from "../Form";
import { Error } from "./Error";
export class Message extends React.Component {
  state = {
    isError: false,
    errorMessage: "Input is empty"
  };

  handleClick = errorState => {
    this.setState({ isError: errorState });
  };

  render() {
    return (
      <>
        <MessageForm
          doctorInfo={this.props.currentDoctor}
          btnOnClick={this.handleClick}
        />
        {this.state.isError ? <Error message={this.state.errorMessage} /> : ""}
      </>
    );
  }
}
