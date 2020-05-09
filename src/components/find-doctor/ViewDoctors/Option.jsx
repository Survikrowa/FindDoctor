import React from "react";

export class Option extends React.Component {
  render() {
    return <option value={this.props.content}>{this.props.content}</option>;
  }
}
