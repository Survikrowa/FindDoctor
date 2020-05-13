import React from "react";
import PropTypes from "prop-types";

export class Error extends React.Component {
  render() {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes! </strong>
        <span className="block sm:inline">{this.props.message}</span>
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string
};
