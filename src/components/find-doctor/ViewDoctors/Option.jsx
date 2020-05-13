import React from "react";
import PropTypes from "prop-types";

export class Option extends React.Component {
  render() {
    return <option value={this.props.content}>{this.props.content}</option>;
  }
}

Option.propTypes = {
  content: PropTypes.string
};
