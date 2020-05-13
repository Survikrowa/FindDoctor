import React from "react";
import PropTypes from "prop-types";

export class Button extends React.Component {
  static defaultProps = {
    btnType: "button",
    btnStyle: "text-white py-2 px-4 rounded"
  };

  render() {
    return (
      <button
        className={this.props.btnStyle}
        onClick={this.props.onClick}
        type={this.props.btnType}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  btnStyle: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string.isRequired
};
