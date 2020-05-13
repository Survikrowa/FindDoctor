import React from "react";
import styles from "./MessageInput.module.css";
import PropTypes from "prop-types";

export class MessageInput extends React.Component {
  render() {
    return (
      <textarea
        value={this.props.textAreaTextValue}
        type="text"
        className={styles.messageContainer}
        onChange={this.props.stateUpdateMethod}
      ></textarea>
    );
  }
}

MessageInput.propTypes = {
  textAreaTextValue: PropTypes.string,
  stateUpdateMethod: PropTypes.func
};
