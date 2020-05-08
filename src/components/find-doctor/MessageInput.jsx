import React from "react";
import styles from "./MessageInput.module.css";

export class MessageInput extends React.Component {
  render() {
    return (
      <>
        <textarea
          value={this.props.textAreaTextValue}
          type="text"
          className={styles.messageContainer}
          onChange={this.props.stateUpdateMethod}
        ></textarea>
      </>
    );
  }
}
