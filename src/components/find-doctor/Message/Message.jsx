import React from "react";
import { Form } from "../Form";
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
    console.log(this.state);
    return (
      <>
        <Form
          doctorInfo={this.props.currentDoctor}
          btnOnClick={this.handleClick}
        />
        {this.state.isError ? <Error message={this.state.errorMessage} /> : ""}
      </>
    );
  }
}
