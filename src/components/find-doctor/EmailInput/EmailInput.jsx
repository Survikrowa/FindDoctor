import React from "react";
import styles from "./EmailInput.module.css";

export class EmailInput extends React.Component {
  getValueForInput = () => {
    return this.props.doctorInfo
      ? this.props.doctorInfo.name +
          this.props.doctorInfo.subname +
          "@gmail.com"
      : "";
  };

  render() {
    return (
      <label className={styles.label + "flex self-start"}>
        Message to:
        <input
          type="text"
          disabled
          value={this.getValueForInput()}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
    );
  }
}
