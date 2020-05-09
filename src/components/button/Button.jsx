import React from "react";

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
